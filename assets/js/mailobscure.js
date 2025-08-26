document.addEventListener("DOMContentLoaded", function () {
  const user = "successinsouthwest";      
  const domain = "gmail.com"; 

  function makeMailto(subject, body) {
    return `mailto:${user}@${domain}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  // Button mappings by CLASS
  const buttons = [
    { selector: ".btn-involved", subject: "I Want to Get Involved", body: "Hello,\n\nI’m interested in supporting the campaign and getting involved!\n\nHere’s my contact information:\nName:\nPhone:\nEmail:\n\nI would like to help with (check all that apply):\n[ ] Placing a yard sign\n[ ] Door-to-door canvassing\n[ ] Phone/text outreach\n[ ] Hosting a neighborhood event\n[ ] Other: ____________\n\nLooking forward to helping!" },
    { selector: ".btn-contact", subject: "Campaign Contact", body: "Hello,\n\nI have a question/comment about the campaign.\n\nName:\nEmail:\nPhone:\nMessage:\n\nThank you!" },
    { selector: ".btn-yard", subject: "Yard Sign Request", body: "Hello,\n\nI would love to show my support by displaying a campaign yard sign.\n\nHere’s my information:\nName:\nAddress:\nCity/Zip:\nPhone:\n\nPlease let me know when signs will be available. Thank you!" }
  ];

  // Assign mailto links
  buttons.forEach(btn => {
    document.querySelectorAll(btn.selector).forEach(el => {
      el.setAttribute("href", makeMailto(btn.subject, btn.body));
    });
  });
});