const request = require('request');
const fs = require('fs');
const exec = require('child_process').exec;
const os = require("os");
async function eva_if(Language) {
  var sdn = 'RUN git clone https://github.com/Zenoixnoize/GARFIELD-6.0 /root/GARFIELD-6.0' + '\n'
  exec('sed -n 3p /root/GARFIELD-6.0/Aurora/Dockerfile ', async (err, stdout, stderr) => {
    if (sdn !== stdout) {
      throw new Error("Fake - Unknown Device !!");
    }
  })
  var data = ''
  if (Language == 'TR') { data = '*WhatsAsena Chatbot Olarak Çalışıyor!* 🐺\n\n_Bu modun amacı botu tam fonksiyonel bir yapay zeka sohbet aracına çevirmektir._\n_Normal moda dönmek için_ *.fulleva off* _komutunu kullanabilirsiniz._\n\n*WhatsAsena Kullandığın İçin Teşekkürler 💌*\n    *- Eva*'
  } else if (Language == 'EN') { data = '*𝗚𝗔𝗥𝗙𝗜𝗘𝗟𝗗 𝗦𝗧𝗔𝗥𝗧𝗘𝗗  🐼* \n\n *𝗘𝗻𝗷𝗼𝘆 𝗻𝗼𝘄 💌*  \n *𝗨𝘀𝗲𝗿𝗻𝗮𝗺𝗲-* ${conn.user.name} \n *GARFIELD  v6.0* \n *𝗗𝗲𝗽𝗹𝗼𝘆𝗲𝗿 𝗜𝗻𝘀𝘁𝗿𝘂𝗰𝘁𝗶𝗼𝗻𝘀 🐼* \n🅾️ You must place a dot(.) at the beginning of the command \n🅾️ The letters in the command should be lowercase \n *🅾️ This will stop after about 22 days. That's because you are in the heroku free version. Or you have to pay but do not. By remake you can easily deploy and use this* \n\n\n\n*𝗛𝗼𝘄 𝘁𝗼 𝗴𝗲𝘁 𝗺𝗲𝗻𝘂 💬*\n🐼  .𝗺𝗲𝗻𝘂  \n🅾️ You can easily and quickly create this for anyone without any programming knowledge\n\n\n\n *𝗚𝗔𝗥𝗙𝗜𝗘𝗟𝗗 𝗟𝗔𝗧𝗘𝗦𝗧 𝗩𝗘𝗥𝗦𝗜𝗢𝗡 💬* \nℹ️ Garfield Bot is a free open source program  \nℹ️ This does nothing for your privacy \nℹ️ Developers do not get any benefit from this. Only self-satisfaction is obtained \nℹ️ This is updated and developed day by day \nℹ️ You can also get this from the telegram - https://t.me/ipandx \nℹ️ You cant get obscene stuff out of this \n\n*𝘿𝙀𝙑𝙀𝙇𝙊𝙋𝙈𝙀𝙉𝙏* \n\n *ℹ️ Follow Us* \n https://www.facebook.com/garfieldbots/ \n\n.        *NOIZE DEVELOPMENT*'
  } else if (Language == 'AZ') { data = '*WhatsAsena Chatbot olaraq işləyir!* 🐺\n\n_Bu modun məqsədi botu tam işlək bir AI söhbət vasitəsinə çevirməkdir._\n_Normal rejimə qayıtmaq üçün_ *.fulleva off* _Bu əmrdən istifadə edə bilərsiniz._\n\n*WhatsAsena istifadə etdiyiniz üçün təşəkkürlər 💌*\n    *- Eva*'
  } else if (Language == 'ES') { data = '*WhatsAsena funciona como chatbot!* 🐺\n\n_El propósito de este mod es convertir el bot en una herramienta de chat de IA completamente funcional._\n_Para volver al modo normal_ *.fulleva off* _Puedes usar este comando._\n\n*Gracias por usar WhatsAsena 💌*\n    *- Eva*'
  } else if (Language == 'PT') { data = '*WhatsAsena funciona como chatbot!* 🐺\n\n_O objetivo deste mod é transformar o bot em uma ferramenta de chat de IA totalmente funcional._\n_Para voltar ao modo normal_ *.fulleva off* _Você pode usar este comando._\n\n*Obrigado por usar o WhatsAsena 💌*\n    *- Eva*'
  } else if (Language == 'RU') { data = '*WhatsAsena работает как чат-бот!* 🐺\n\n_Цель этого мода - превратить бота в полнофункциональный инструмент чата с ИИ.._\n_Чтобы вернуться в нормальный режим_ *.fulleva off* _Вы можете использовать эту команду._\n\n*Спасибо за использование WhatsAsena 💌*\n    *- Eva*'
  } else if (Language == 'HI') { data = '*WhatsAsena चैटबोट के रूप में काम करता है!* 🐺\n\n_इस मॉड का उद्देश्य बॉट को पूरी तरह कार्यात्मक AI चैट टूल में बदलना है._\n_सामान्य मोड पर लौटने के लिए_ *.fulleva off* _आप इस आदेश का उपयोग कर सकते हैं._\n\n*WhatsAsena का उपयोग करने के लिए धन्यवाद 💌*\n    *- Eva*'
  } else if (Language == 'ML') { data = '*WhatsAsena ചാറ്റ്ബോട്ടായി പ്രവർത്തിക്കുന്നു!* 🐺\n\n_ബോട്ട് പൂർണ്ണമായും പ്രവർത്തനക്ഷമമായ AI ചാറ്റ് ഉപകരണമാക്കി മാറ്റുക എന്നതാണ് ഈ മോഡിന്റെ ലക്ഷ്യം._\n_സാധാരണ മോഡിലേക്ക് മടങ്ങാൻ_ *.fulleva off* _നിങ്ങൾക്ക് ഈ കമാൻഡ് ഉപയോഗിക്കാം._\n\n*WhatsAsena ഉപയോഗിച്ചതിന് നന്ദി 💌*\n    *- Eva*'
  } else if (Language == 'ID') { data = '*WhatsAsena Bekerja sebagai Chatbot!* 🐺\n\n_Tujuan dari mod ini adalah untuk mengubah bot menjadi alat obrolan AI yang berfungsi penuh._\n_Untuk kembali ke mode normal_ *.fulleva off* _Anda dapat menggunakan perintah ini._\n\n*Terima Kasih Telah Menggunakan WhatsAsena 💌*\n    *- Eva*'
  }
  return data;
}
module.exports = eva_if
