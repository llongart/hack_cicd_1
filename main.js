import language from '../json/es-MX.json' with { type: 'json' };

let stockTable = new DataTable('#stockTable', {
    language: language,
    sort: true,
    layout: {
        topStart: {
            buttons: ['pageLength', 'spacer', 'excelHtml5', 'spacer', 'pdf']
        },
        topEnd: { 
            search: {
              placeholder: 'Introducir filtrado' 
            }
        },
        bottomStart: 'info',
        bottomEnd: {
            paging: {
                buttons: 10,
                numbers: true
            }
        }
    }      
});

let storesTable = new DataTable('#storesTable', {
    language: language,
    sort: true,
    layout: {
        topStart: {
            buttons: ['pageLength', 'spacer', 'excelHtml5', 'spacer', 'pdf']
        },
        topEnd: { 
            search: {
              placeholder: 'Introducir filtrado' 
            }
        },
        bottomStart: 'info',
        bottomEnd: {
            paging: {
                buttons: 10,
                numbers: true
            }
        },
        columnDefs: [
            {
                targets: -1,
                className: 'dt-head-left'
            }
        ]
    }      
});

function addListenerMaterialMatchcode(){
    const materialInput = document.querySelector('#id_material');
    if(materialInput != null){
        materialInput.addEventListener("dblclick", (e) => {
            e.preventDefault();
            var $matchcode = $("#matchcode");
            var matchcode_url = $("#material-matchcode").val();
            $(".modal-body", $matchcode).load(matchcode_url, function () {
                $matchcode.modal("show");
            });        
        }); 
    }
};
