app.controller('PrevisaoTempoCtrl', ['$scope', 'PrevisaoTempoService', '$filter', '$interval', function($scope, PrevisaoTempoService, $filter, $interval){

    $scope.orderBy = 'date';
    $scope.ordenacaoDesc = false;
    $scope.escalaGrafico = 'celcius';
    $scope.carregando = true;
    $scope.criterioGrafico = 'maxima';

    $scope.selecionarEscalaGrafico = function(escala){
        if($scope.escalaGrafico == escala)
            return;

        $scope.escalaGrafico = escala;
        $scope.carregarGrafico();
    }

    $scope.series = ['Máxima',  'Média', 'Mínima'];

    $scope.alterarOrdenacao = function(orderBy){
        if($scope.orderBy == orderBy)
        {
            $scope.ordenacaoDesc = !$scope.ordenacaoDesc; 
        }
        else
        {
            $scope.orderBy = orderBy;
            $scope.ordenacaoDesc = false;
        }
        $scope.aplicarOrdenacao();
    };

    $scope.aplicarOrdenacao = function(){
        $scope.previsaoTempo.channel.item.forecast =  $filter('orderBy')($scope.previsaoTempo.channel.item.forecast, $scope.orderBy, $scope.ordenacaoDesc);
    };

    $scope.load = function(){
        PrevisaoTempoService.getPrevisaoTempoSaoPaulo()
            .then(function(response){
                $scope.previsaoTempo = PrevisaoTempoService.formatarRetorno(response.data); 
                $scope.carregarGrafico();
            })
            .catch(function(err){
                throw err;
            });
    }


    $scope.carregarGrafico = function(){
        var propriedadeEscala = {
            'celcius' : { 
                maxima: 'highCelcius',
                minima: 'lowCelcius',
                media: 'mediaCelcius'
            },
            'fahrenheit' : { 
                maxima : 'highFahrenheit',
                minima:  'lowFahrenheit',
                media: 'mediaFahrenheit'
            }
        };

        var propriedade = propriedadeEscala[$scope.escalaGrafico];
        var propriedadeOrdenacao = propriedade[$scope.criterioGrafico];

        $scope.maioresTemps  = $filter('orderBy')($scope.previsaoTempo.channel.item.forecast, propriedadeOrdenacao).slice(-5);
        $scope.data = [ 
            $scope.maioresTemps.map(function(temp){ return temp[propriedade.maxima]; }),
            $scope.maioresTemps.map(function(temp){ return temp[propriedade.media]; }),
            $scope.maioresTemps.map(function(temp){ return temp[propriedade.minima]; })
        ];
        $scope.labels = $scope.maioresTemps.map(function(temp){ return $filter('date')(temp.date, 'dd/MM/yyyy'); });
        $scope.carregando = false;
    };

    $scope.load();

    $interval($scope.load, 5000);
}]);
