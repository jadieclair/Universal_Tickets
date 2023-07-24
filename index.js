// Event class
class Event {
          constructor(name, date, location, category, tickets, imageSrc) {
            this.name = name;
            this.date = new Date(date);

            this.location = location;
            this.category = category;
            this.tickets = tickets;
            this.imageSrc = imageSrc;
          }
        
          render() {
            // Create a div element with the class 'event-card'
            const eventCard = document.createElement("div");
            eventCard.className = "event-card";
        
            const imageElement = document.createElement("img");
            imageElement.src = this.imageSrc;
            eventCard.appendChild(imageElement);
        
            const nameElement = document.createElement("h2");
            nameElement.textContent = this.name;
            eventCard.appendChild(nameElement);
        
            // Create a paragraph element for the date and set its text content
            // format date using `this.date.toDateString()`
        
            const dateElement = document.createElement("p");
            dateElement.textContent = `Date: ${this.date.toDateString()}`;
            eventCard.appendChild(dateElement);
        
            const locationElement = document.createElement("p");
            locationElement.textContent = `Location: ${this.location}`;
            eventCard.appendChild(locationElement);
        
            const categoryElement = document.createElement("p");
            categoryElement.textContent = `Category: ${this.category}`;
            eventCard.appendChild(categoryElement);
        
            const priceElement = document.createElement("p");
            priceElement.textContent = `Price: R${this.price}`;
            eventCard.appendChild(priceElement);
        
            const buttonElement = document.createElement("button");
            buttonElement.textContent = "Buy Tickets";
        
            // Check if the event has already passed
            const currentDate = new Date();
            if (this.date < currentDate) {
              buttonElement.disabled = true; // Disable the button if the event has passed
              buttonElement.textContent = "Passed"; // Update the button text
            }
        
            // Add event listener to the button
            buttonElement.addEventListener("click", () => {
              // Store the event details in localStorage
              localStorage.setItem("selectedTicket", JSON.stringify(this));
              // Redirect to the ticket.html page
              window.location.href = "ticket.html";
              // Handle button click event here
              console.log("Button clicked!");
            });
        
            // Add the button to the event card
            eventCard.appendChild(buttonElement);
        
            // Return the event card element
            return eventCard;
          }
        }
        
        class Ticket extends Event {
          constructor(name, date, location, category, tickets, imageSrc, price) {
            super(name, date, location, category, tickets, imageSrc);
            this.price = price;
          }
        }
        
        // Create some events instances
        const events = [
          new Ticket(
            "Girls Skate Session",
            "2023-08-21",
            "Nike Skatepark, Soweto",
            "Skate",
            180,
            "./img/skate1.png",
            0
          ),
          new Ticket(
            "Enrollment Webinar",
            "2023-07-27",
            "WeWork Building, Rosebank",
            "Tech",
            50,
            "./img/mel.jpg",
            0
          ),
          new Ticket(
            "AmbiVerse Festival",
            "2023-09-12",
            "Hypes Club, Durban",
            "Music",
            1000,
            "./img/music1.png",
            250
          ),
          new Ticket(
            " AmbiRhythms Festival",
            "2023-10-03",
            "Zone6 Venue, DK",
            "Music",
            1200,
            "./img/music2.png",
            0
          ),
          new Ticket(
            "FlipFury Skate Festival",
            "2023-08-09",
            "NBA Skatepark, Harties",
            "SKATE",
            1800,
            "./img/skate2.png",
            150
          ),
          new Ticket(
            "AmbiVibe Festival",
            "2023-08-02",
            "Konka, Soweto",
            "Music",
            1000,
            "./img/music4.png",
            0
          ),
          new Ticket(
            "Little Skateboarding",
            "2023-08-10",
            "Battery Skatepark, CPT",
            "Skate",
            1500,
            "./img/skate3.png",
            80
          ),
          new Ticket(
            "FlipTrick Showdown",
            "2023-06-10",
            "YBT Skatepark, Sandton",
            "Skate",
            1800,
            "./img/skate4.png",
            0
          ),
         

          new Ticket(
            "TechXpo Showcase",
            "2023-11-25",
            "WeWork Building, Rosebank",
            "Tech",
            50,
            "./img/tech2.png",
            150
          ),

          new Ticket(
            "Cohort Open Day",
            "2023-08-23",
            "WeWork Building, Rosebank",
            "Tech",
            50,
            "./img/tech3.png",
            0
          ),
          
          new Ticket(
            "Shred Fest",
            "2023-01-10",
            "YBT Skatepark, Sandton",
            "Skate",
            1800,
            "./img/shred.jpg",
            0
          ),
          new Ticket(
            "Master AI",
            "2023-06-29",
            "WeWork Building, Rosebank",
            "Tech",
            50,
            "./img/tech5.jpg",
            0
          ),
        ];
        
        // Function to render the events
        function renderEvents(
          eventsToRender,
          categoryFilter = "all",
          dateFilter = "all"
        ) {
          const eventListElement = document.getElementById("event-list");
          eventListElement.innerHTML = "";
        
          const currentDate = new Date();
        
          eventsToRender.forEach((event) => {
            // Apply category filter if it is not set to 'all'
            if (categoryFilter === "all" || event.category === categoryFilter) {
              // Apply date filter based on user selection
              if (dateFilter === "upcoming" && event.date >= currentDate) {
                const eventCard = event.render();
                eventListElement.appendChild(eventCard);
              } else if (dateFilter === "passed" && event.date < currentDate) {
                const eventCard = event.render();
                eventListElement.appendChild(eventCard);
              } else if (dateFilter === "all") {
                const eventCard = event.render();
                eventListElement.appendChild(eventCard);
              }
            }
          });
        }
        
        // Function to handle search event
        function handleSearch() {
          const searchInput = document.getElementById("search-input");
          const searchTerm = searchInput.value.toLowerCase();
        
          const categoryFilter = document.getElementById("category-filter").value;
          const dateFilter = document.getElementById("date-filter").value;
        
          const filteredEvents = events.filter((event) => {
            const eventName = event.name.toLowerCase();
            return eventName.includes(searchTerm);
          });
        
          renderEvents(filteredEvents, categoryFilter, dateFilter);
        }
        
        // Event listener for search input
        const searchInput = document.getElementById("search-input");
        searchInput.addEventListener("input", handleSearch);
        
        // Event listener for category filter
        const categoryFilter = document.getElementById("category-filter");
        categoryFilter.addEventListener("change", handleSearch);
        
        // Event listener for date filter
        const dateFilter = document.getElementById("date-filter");
        dateFilter.addEventListener("change", handleSearch);
        
        // Call the handleSearch function initially to display all events
        handleSearch();
        
        // Call the renderEvents function to display the events initially
        renderEvents(events);