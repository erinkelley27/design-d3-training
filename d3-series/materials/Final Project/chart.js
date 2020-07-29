function buildChart(id) {
  var width = 700;
  var height = 400;

  var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
  };

  var innerWidth = width - margin.left - margin.right;
  var innerHeight = height - margin.top - margin.bottom;

  var svg = d3.select(id).append("svg").attr("height", height).attr("width", width);

  var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  d3.json("./data/countries.json", function (error, geojson) {
    handleError(error, "failed to read geoJSON data");

    d3.csv("./data/Olympic_Medals.csv", function (error, olympicMedals) {
      handleError(error, "failed to read olympic data");
      var countries = prepCountryMedals(olympicMedals);
      drawMap(geojson, countries);
    });
  });

  function handleError(error, msg) {
    if (error) {
      console.error(msg);
    }
  }

  function prepCountryMedals(data) {
    var countries = {};
    data.forEach((d) => {
      if (!countries[d["Country_Code"]]) {
        countries[d["Country_Code"]] = {
          total: 0,
          gold: 0,
          silver: 0,
          bronze: 0,
        };
      }
      checkMedals(countries, d);
    });
    return countries;
  }

  function checkMedals(countries, d) {
    countries[d["Country_Code"]].total++;
    if (d.Medal === "Gold") {
      countries[d["Country_Code"]].gold++;
    } else if (d.Medal === "Silver") {
      countries[d["Country_Code"]].silver++;
    } else if (d.Medal === "Bronze") {
      countries[d["Country_Code"]].bronze++;
    }
  }

  function drawMap(geojson, countries) {
    console.log(geojson, countries);
    geojson.features.forEach((f) => {
      var country = countries[f.id];
      if (country) {
        f.properties.medals = country;
      }
    });

    var mercatorProj = d3
      .geoMercator()
      .scale(130)
      .translate([innerWidth / 2, innerHeight / 2]);

    var geoPath = d3.geoPath().projection(mercatorProj);

    var opacityScale = d3.scaleLinear().domain([0, 800]).range([0, 1]);

    var tooltip = d3.select("body").append("div").attr("class", "tooltip").attr("opacity", 0);

    g.selectAll("path")
      .data(geojson.features)
      .enter()
      .append("path")
      .attr("d", geoPath)
      .style("fill", function (d) {
        if (d.properties.medals) {
          return "darkblue";
        } else {
          return "white";
        }
      })
      .style("stroke", "grey")
      .style("stroke-width", 0.5)
      .attr("fill-opacity", function (d) {
        if (d.properties.medals) {
          return opacityScale(d.properties.medals.total);
        }
      })
      .on("mouseover", function (d) {
        tooltip
          .transition()
          .duration(100)
          .style("opacity", 0.9)
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY + "px");
        if (d.properties.medals) {
          tooltip.html(
            d.properties.name +
              "<br>" +
              "Total Medals: " +
              d.properties.medals.total +
              "<br>" +
              "Gold: " +
              d.properties.medals.gold +
              "<br>" +
              "Silver: " +
              d.properties.medals.silver +
              "<br>" +
              "Bronze: " +
              d.properties.medals.bronze
          );
        } else {
          tooltip.html(d.properties.name + "<br>" + "No medals");
        }
      })
      .on("mouseout", function (d) {
        tooltip.transition().duration(100).style("opacity", 0);
      });
  }
}

buildChart("#chart-container");
