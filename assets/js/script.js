window.onload = function calculateHeight() {
  const element = document.getElementById("sidebar");

  const height = element.offsetHeight;

  console.log(height , 'on reload');

  const targetElement = document.getElementById("main-right-container");

  targetElement.style.height = `${height}px`;
};


function btnToggle(){
  document.querySelector(".btn-toggle").addEventListener("click", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((navLink) => {
      if (navLink.classList.contains("flex-column")) {
        navLink.classList.remove("flex-column");
        navLink.classList.add("flex-row");
      } else if (navLink.classList.contains("flex-row")) {
        navLink.classList.remove("flex-row");
        navLink.classList.add("flex-column");
      }
    });

    document.querySelectorAll(".nav-link h5").forEach((h5) => {
      if (h5.classList.contains("d-none")) {
        h5.classList.remove("d-none");
        h5.classList.add("d-block");
      } else if (h5.classList.contains("d-block")) {
        h5.classList.remove("d-block");
        h5.classList.add("d-none");
      }
    });
  });
}

function orderGraph() {
  const ctx = document.getElementById("orderGraph").getContext("2d");

  // Chart configuration with colors
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7"], // Weekdays
    datasets: [
      {
        label: "Last 24 hours",
        data: [200, 600, 400, 700, 500, 800, 400], // Data points
        borderColor: "#28287C", // Pink border color
        backgroundColor: "#28287C", // Light pink fill
        tension: 0.4,
        pointBackgroundColor: "#28287C", // Orange points
        pointRadius: 6,
      },
      {
        label: "This Week",
        data: [400, 300, 500, 400, 800, 700, 600], // Data points
        borderColor: "#AFB3C0", // Dark blue border color
        backgroundColor: "#AFB3C0", // Light blue fill
        tension: 0.4,
        pointBackgroundColor: "#AFB3C0", // Orange points
        pointRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable default legend
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Week Days",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Orders",
        },
        beginAtZero: true,
      },
    },
  };

  // Create the chart
  new Chart(ctx, {
    type: "line", // Line chart
    data: data,
    options: options,
  });
}

function OrderBarGraph() {
  const ctx = document.getElementById("orderBarChart").getContext("2d");

  // Chart configuration
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], // Months
    datasets: [
      {
        label: "Last Year",
        data: [400, 300, 200, 500, 450, 700, 350, 250, 500, 400, 450, 300], // Data points for last year
        backgroundColor: [
          "#28287C",
          "#28287C",
          "#28287C",
          "#28287C",
          "#28287C",
          "#28287C",
          "#28287C",
          "#28287C",
          "#28287C",
          "#28287C",
          "#28287C",
          "#28287C",
        ],
        borderRadius: 5,
        barPercentage: 0.5,
      },
      {
        label: "This Year",
        data: [500, 400, 300, 600, 500, 800, 450, 300, 550, 500, 600, 400], // Data points for this year
        backgroundColor: [
          "#f46cb6",
          "#f46cb6",
          "#f46cb6",
          "#f46cb6",
          "#f46cb6",
          "#f46cb6",
          "#f46cb6",
          "#f46cb6",
          "#f46cb6",
          "#f46cb6",
          "#f46cb6",
          "#f46cb6",
        ],
        borderRadius: 5,
        barPercentage: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend (custom legend added manually)
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
        stacked: false,
      },
      y: {
        title: {
          display: true,
          text: "Number of Orders",
        },
        beginAtZero: true,
      },
    },
  };

  new Chart(ctx, {
    type: "bar", // Bar chart
    data: data,
    options: options,
  });
}


btnToggle();
orderGraph();
OrderBarGraph();
