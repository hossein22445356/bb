export default function handler(req, res) {
  const { method, query } = req;

  // اگر می‌خوای رکورد اضافه کنی
  if (method === "GET" && query.mode === "add") {
    const {
      project = "factory",   // factory یا hospital
      kind = "other",        // purchase, sale, salary, ...
      amount = "0",
      note = ""
    } = query;

    const createdAt = new Date().toISOString();

    return res.status(200).json({
      ok: true,
      // فعلاً ذخیره واقعی نداریم، فقط پیش‌نمایش
      willBeSavedLater: true,
      record: {
        project,
        kind,
        amount: Number(amount),
        note,
        createdAt,
      },
      message: "رکورد دریافت شد. در مرحله بعدی واقعاً ذخیره‌اش می‌کنیم. 👌",
    });
  }

  // حالت پیش‌فرض: فقط تست اتصال
  return res.status(200).json({
    message: "سیستم آزمایشی وصل شد 👌",
    usage:
      "برای تست این آدرس را بزن: /api?mode=add&project=factory&kind=purchase&amount=12345&note=آزمایشی",
  });
}
