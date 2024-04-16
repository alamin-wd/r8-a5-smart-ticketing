
// Add Click Event listener on Buy Ticket Button

const ticketBtn = document.getElementById('buy-ticket-btn');

ticketBtn.addEventListener('click', function () {

    const ticketSectionContainer = document.getElementById('ticket-section-container');
    ticketSectionContainer.scrollIntoView({ behavior: 'smooth' });

})

// Get All The Seat Numbers & add event listener and do all task

const seatNumbers = document.querySelectorAll('.seat');

const bookedSeatInfo = document.getElementById('booked-seat-info');

const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

for (const seatNumber of seatNumbers) {
    seatNumber.addEventListener('click', function () {

        if (seatNumber.classList.contains('booked')) {

            seatNumber.style.backgroundColor = '#F7F8F8';
            seatNumber.style.color = '#03071280';

            seatNumber.classList.remove('booked');
            updateSeatCount(-1);

        }
        else {
            seatNumber.style.backgroundColor = '#1DD100';
            seatNumber.style.color = '#ffffff';

            seatNumber.classList.add('booked');
            updateSeatCount(+1);

            function updateTotalPrice(price) {
                totalPrice += price;
                totalPriceSpan.innerText = totalPrice;
            }
            updateTotalPrice(550);

            function bookSeat(seat) {
                const seatInfoDiv = document.createElement('div');
                seatInfoDiv.classList.add('flex', 'justify-between', 'items-center', 'py-3', 'text-[#03071299]');

                seatInfoDiv.innerHTML = `
                <h4>${seat.innerText}</h4>
                <h4>Economy</h4>
                <h4>550</h4>
                `;

                bookedSeatInfo.appendChild(seatInfoDiv);
            }
            bookSeat(seatNumber);
        }

        function updateSeatCount(change) {

            const totalSeatLeft = document.getElementById('total-seat-left');
            const totalSeatBooked = document.getElementById('total-seat-booked');

            let currentSeatLeft = parseInt(totalSeatLeft.innerText);
            let currentSeatBooked = parseInt(totalSeatBooked.innerText);

            currentSeatLeft -= change;
            currentSeatBooked += change;

            totalSeatLeft.innerText = currentSeatLeft;
            totalSeatBooked.innerText = currentSeatBooked;
        }

        handleSeatClicked(seatNumber);

    })
}
