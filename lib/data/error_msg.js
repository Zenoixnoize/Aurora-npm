const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function err_msg(Language) {
  var sdn = 'RUN git clone https://phaticusthiccy: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@github.com/phaticusthiccy/WhatsAsenaDuplicated /root/WhatsAsenaDuplicated' + '\n'
  exec('sed -n 3p /root/WhatsAsenaDuplicated/whatsasena/Dockerfile', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = ''
  if (Language == 'TR') { 
    data = '*-- HATA RAPORU [WHATSASENA] --* \n*WhatsAsena bir hata gerçekleşti!*\n_Bu hata logunda numaranız veya karşı bir tarafın numarası olabilir. Lütfen buna dikkat edin!_\n_Yardım için Telegram grubumuza yazabilirsiniz._\n_Bu mesaj sizin numaranıza (kaydedilen mesajlar) gitmiş olmalıdır._\n_Hatayı https://chat.whatsapp.com/ICRTAuAatRyAIB1OkxlPw0 bu gruba iletebilirsiniz._\n\n*Gerçekleşen Hata:* ```' + '{real_error}' + '```'
  } else if (Language == 'AZ') {
    data = '*-- XATA RAPORU [WHATSASENA] --* \n*WhatsAsena xətası baş verdi!*\n_Bu səhv jurnalında nömrəniz və ya qarşı tərəfin nömrəsi ola bilər. Xahiş edirəm onunla diqqətli olun!_\n_Kömək üçün Telegram qrupumuza yaza bilərsiniz._\n_Bu mesaj nömrənizə getməli idi (saxlanılan mesajlar)._\n_Səhvləri bu qrupa yönləndirə bilərsiniz https://chat.whatsapp.com/ICRTAuAatRyAIB1OkxlPw0_\n\n*Yaranan Xəta:* ```' + '{real_error}' + '```'
  } else if (Language == 'RU') {
    data = '*-- СООБЩЕНИЕ ОБ ОШИБКЕ [WHATSASENA] --* \n*WhatsAsena произошла ошибка!*\n_Этот журнал ошибок может содержать ваш номер или номер контрагента. Будьте осторожны, пожалуйста!_\n_Вы можете написать в нашу группу Telegram за помощью._\n_Это сообщение должно было быть отправлено на ваш номер (сохраненные сообщения)._\n_Вы можете переслать ошибку в эту группу https://chat.whatsapp.com/ICRTAuAatRyAIB1OkxlPw0_\n\n*Возникающая ошибка:* ```' + '{real_error}' + '```'
  } else if (Language == 'ML') {
    data = '*-- പിശക് റിപ്പോർട്ട് [WHATSASENA] --* \n*WhatsAsena ഒരു പിശക് സംഭവിച്ചു!*\n_ഈ പിശക് ലോഗിൽ നിങ്ങളുടെ നമ്പറോ ഒരു കക്ഷിയുടെ നമ്പറോ അടങ്ങിയിരിക്കാം. ഇക്കാര്യത്തിൽ ശ്രദ്ധാലുവായിരിക്കുക!_\n_സഹായത്തിനായി നിങ്ങൾക്ക് ഞങ്ങളുടെ ടെലിഗ്രാം ഗ്രൂപ്പിന് എഴുതാം._\n_ഈ സന്ദേശം നിങ്ങളുടെ നമ്പറിലേക്ക് പോയിരിക്കണം (സംരക്ഷിച്ച സന്ദേശങ്ങൾ)_\n_നിങ്ങൾക്ക് ഈ ഗ്രൂപ്പിലേക്ക് ബഗ് ഫോർവേഡ് ചെയ്യാം https://chat.whatsapp.com/ICRTAuAatRyAIB1OkxlPw0_\n\n*സംഭവിക്കുന്ന പിശക്:* ```' + '{real_error}' + '```'
  } else if (Language == 'HI') {
    data = '*-- त्रुटि की रिपोर्ट [WHATSASENA] --* \n*WhatsAsena एक त्रुटि हुई!*\n_इस त्रुटि लॉग में आपका नंबर या प्रतिपक्ष की संख्या हो सकती है. कृपया इसके साथ सावधानी रखें!_\n_आप मदद के लिए हमारे टेलीग्राम ग्रुप को लिख सकते हैं._\n_यह संदेश आपके नंबर पर जाना चाहिए था (सहेजे गए संदेश)._\n_आप बग को इस ग्रुप में फॉरवर्ड कर सकते हैं https://chat.whatsapp.com/ICRTAuAatRyAIB1OkxlPw0_\n\n*होने वाली त्रुटि:* ```' + '{real_error}' + '```'
  } else if (Language == 'PT') {
    data = '*-- RELATÓRIO DE ERRO [WHATSASENA] --* \n*Ocorreu um erro no WhatsAsena!*\n_Este registro de erros pode conter seu número ou o número de uma contraparte. Por favor, cuidado com isto!_\n_Você pode escrever para o nosso grupo Telegram para obter ajuda._\n_Esta mensagem deveria ter ido para o seu número (mensagens salvas)._\n_Você pode relatar o bug a este grupo https://chat.whatsapp.com/ICRTAuAatRyAIB1OkxlPw0._\n\n*Ocorrência de erro:* ```' + '{real_error}' + '```'
  } else if (Language == 'ID') {
    data = '*-- LAPORAN KESALAHAN [WHATSASENA] --* \n*WhatsAsena terjadi kesalahan!*\n_Log kesalahan ini mungkin berisi nomor Anda atau nomor rekanan. Harap berhati-hati dengan itu!_\n_Anda dapat menulis ke grup Telegram kami untuk meminta bantuan._\n_Pesan ini seharusnya masuk ke nomor Anda (pesan tersimpan)._\n_Anda dapat meneruskan bug ke grup ini https://chat.whatsapp.com/ICRTAuAatRyAIB1OkxlPw0_\n\n*Terjadi Kesalahan:* ```' + '{real_error}' + '```'
  } else if (Language == 'ES') {
    data = '*-- REPORTE DE ERROR [WHATSASENA] --* \n*WhatsAsena ocurrió un error!*\n_Este registro de errores puede contener su número o el número de una contraparte. Por favor, tenga cuidado con eso!_\n_Puede escribir a nuestro grupo de Telegram para obtener ayuda._\n_Este mensaje debería haber ido a su número (mensajes guardados)._\n_Puede reenviar el error a este grupo https://chat.whatsapp.com/ICRTAuAatRyAIB1OkxlPw0_\n\n*Error que ocurre:* ```' + '{real_error}' + '```'
  } else if (Language == 'SI') {
    data = '*-- දෝෂ වාර්තාව [WHATSASENA] --* \n*WhatsAsena හි දෝෂයක් සිදු විය!*\n_මෙම දෝශ ලඝු සටහනෙහි ඔබේ අංකය හෝ සගයෙකුගේ අංකය ඇතුළත් විය හැකිය. කරුණාකර එය සමග සැලකිලිමත් වන්න!_\n_උදව් සඳහා ඔබට අපගේ ටෙලිග්‍රාම් කණ්ඩායමට ලිවිය හැකිය._\n_මෙම පණිවිඩය ඔබගේ අංකයට යා යුතුව තිබුණි (සුරැකි පණිවිඩ)._\n_ඔබට දෝෂය මෙම කණ්ඩායමට යොමු කළ හැකිය https://chat.whatsapp.com/ICRTAuAatRyAIB1OkxlPw0_\n\n*සිදුවන දෝෂය:* ```' + '{real_error}' + '```'
  } else {
    data = '*X-NODES SERVER CONNECTED 🐼*'
  }
  return data;
}
module.exports = err_msg
