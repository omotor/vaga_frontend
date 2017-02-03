(function() {
  'use strict';

  angular
    .module('vagaFrontend')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $translateProvider, ChartJsProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts
    ChartJsProvider.setOptions('line', {
      showLines: true
    });


    $translateProvider.translations('pt-br', {
      0 : 'tornado',
      1 : 'Tempestade ',
      2 : 'Furacão',
      3 : 'Tempestade Violenta',
      4 : 'Tempestade',
      5 : 'Chuva parcial e Neve',
      6 : 'Chuva parcial e Granizo',
      7 : 'Neve e Granizo',
      8 : 'Chuvisco Congelante',
      9 : 'Chuvisco',
      10 : 'Chuva Congelante',
      11 : 'Muita Chuva',
      12 : 'Muita Chuva',
      13 : 'Flocos de neve',
      14 : 'Leve Nevasca',
      15 : 'Neve',
      16 : 'Neve',
      17 : 'Granizo',
      18 : 'Chuva com Neve',
      19 : 'Poeira',
      20 : 'Nebuloso',
      21 : 'Neblina',
      22 : 'Enfumaçado',
      23 : 'Vento Forte',
      24 : 'Ventania',
      25 : 'Frio',
      26 : 'Nublado',
      27 : 'Predominantemente nublado(noite)',
      28 : 'Predominantemente nublado(dia)',
      29 : 'Parcialmente nublado(noite)',
      30 : 'Parcialmente nublado(dia)',
      31 : 'Céu Limpo(noite)',
      32 : 'Ensolarado',
      33 : 'Ameno (noite)',
      34 : 'Ameno (dia)',
      35 : 'Chuva e granizo',
      36 : 'Calor',
      37 : 'Trovoadas',
      38 : 'Trovoadas Dispersas',
      39 : 'Trovoadas Dispersas',
      40 : 'Chuva Dispersa',
      41 : 'Nevasca',
      42 : 'Tempestade de Neve',
      43 : 'Nevasca',
      44 : 'Parcialmente Nublado',
      45 : 'Tempestade de vento',
      46 : 'Chuva de Neve',
      47 : 'Trovoadas Isoladas',
      'Sun' : 'Dom',
			'Mon' : 'Seg',
			'Tue' : 'Ter',
			'Wed' : 'Qua',
			'Thu' : 'Qui',
			'Fri' : 'Sex',
			'Sat' : 'Sab',
    });

    $translateProvider.preferredLanguage('pt-br');

  }

})();
