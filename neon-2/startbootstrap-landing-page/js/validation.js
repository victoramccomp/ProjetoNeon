<script>
$(document).ready(function() {
  $('#registrationForm').formValidation({
    framework: 'bootstrap',
    icon: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      firstName: {
        row: '.col-xs-4',
        validators: {
          notEmpty: {
            message: 'O primeiro nome é obrigatório'
          }
        }
      },
      lastName: {
        row: '.col-xs-4',
        validators: {
          notEmpty: {
            message: 'O sobrenome é obrigatório'
          }
        }
      },
      email: {
        validators: {
          notEmpty: {
            message: 'O e-mail é obrigatório'
          },
          emailAddress: {
            message: 'E-mail inválido'
          }
        }
      },
      agree: {
        validators: {
          notEmpty: {
            message: 'Você deve concordar com o regulamento da campanha'
          }
        }
      }
    }
  });
});
</script>
