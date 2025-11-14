document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("success-msg");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // ❌ يمنع Formspree من فتح صفحة الشكر

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        successMsg.style.display = "block";
      } else {
        alert("❌ حدث خطأ أثناء إرسال الرسالة، حاول مرة أخرى.");
      }
    } catch (error) {
      alert("⚠️ لم يتم الاتصال بالخادم. تأكد من الاتصال بالإنترنت.");
    }
  });
});


  const toggleCheckbox = document.querySelector(".toogle__cheakbox");
  const body = document.body;

  // لو المستخدم اختار ثيم قبل كده، نحفظه



