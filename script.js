// EmailJS — shared across Golden Bloom Bakes
(function () {
  emailjs.init("gbcyMhXH8aQbt3cLN");
})();

/**
 * Contact form handler (index.html)
 * Sends contact inquiry via EmailJS and shows success/error in place of the form.
 */
function handleContactSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const templateParams = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  emailjs
    .send("service_ub1ad58", "template_jtdu8eb", templateParams)
    .then(function () {
      form.innerHTML =
        '<div class="success-message">&#9989; Message sent! We\'ll get back to you soon.</div>';
    })
    .catch(function (error) {
      console.error("EmailJS contact form error:", error);
      form.innerHTML =
        '<div class="error-message">&#10060; Something went wrong. Please try again.</div>';
    });
}

/**
 * Order form handler (order.html)
 * Sends order details via EmailJS and shows success/error in place of the form.
 */
function handleOrderSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  var templateParams = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    cake_type: formData.get("cake_type"),
    servings: formData.get("servings"),
    flavour: formData.get("flavour"),
    delivery_date: formData.get("delivery_date"),
    delivery_method: formData.get("delivery_method"),
    cake_message: formData.get("cake_message"),
    message: formData.get("instructions"),
  };

  emailjs
    .send("service_ub1ad58", "template_jtdu8eb", templateParams)
    .then(function () {
      form.innerHTML =
        '<div class="success-message">&#9989; Order placed! We\'ll confirm shortly.</div>';
    })
    .catch(function (error) {
      console.error("EmailJS order form error:", error);
      form.innerHTML =
        '<div class="error-message">&#10060; Something went wrong. Please try again.</div>';
    });
}
