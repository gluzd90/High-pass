
    const validation = new JustValidate('#form-contacts', {
        errorLabelStyle: {
            color: '#FF3030'
        }
    });
  
    validation
      .addField('#name', [{
  
          rule: 'minLength',
          value: 3,
          errorMessage: "Не достаточное количество символов!"
        },
  
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните имя!'
        },
  
        {
          rule: 'customRegexp',
          value: /^[a-zA-Zа-яёА-ЯЁ\s\-]+$/,
          errorMessage: 'Недопустимый формат!'
        }
      ])
  
      .addField('#email', [{
          rule: 'required',
          errorMessage: 'Введите Email!',
        },
        {
          rule: 'email',
          errorMessage: 'Недопустимый формат!',
        }
      ])
  
     
  
      document.getElementById('form-contacts').addEventListener('submit', (event) => {
        event.preventDefault();
        event.target.reset();
      })
  
  
  
 
    const validate = new JustValidate('#form-studio', {
        errorLabelStyle: {
            color: '#F06666'
        }
    })
      validate
        .addField('#mail', [{
          rule: 'required',
          errorMessage: 'Введите Email!',
        },
        {
          rule: 'email',
          errorMessage: 'Недопустимый формат!',
        }
      ])
        document.getElementById('form-studio').addEventListener('submit', (event) => {
          event.preventDefault();
          event.target.reset();
        })
  
    
  
  
  
  
  