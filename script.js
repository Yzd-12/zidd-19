// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('printOrderForm');
    const orderMessage = document.getElementById('orderMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const customerName = document.getElementById('customerName').value;
        const printType = document.getElementById('printType').value;
        const quantity = document.getElementById('quantity').value;
        const additionalNotes = document.getElementById('additionalNotes').value;

        // Display a message to the user
        orderMessage.innerHTML = `
            <strong>Order Confirmation:</strong><br>
            Nama: ${customerName}<br>
            Yang Di Buat: ${printType}<br>
            Jumlah: ${quantity}<br>
            Pesan Tambahan: ${additionalNotes || 'None'}
        `;

        // Optionally, clear the form
        form.reset();
    });
});
