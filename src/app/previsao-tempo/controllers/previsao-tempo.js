app.controller('PrevisaoTempoCtrl', ['$scope', 'PrevisaoTempoService', '$filter', '$interval', function($scope, PrevisaoTempoService, $filter, $interval){

    $scope.orderBy = 'date';
    $scope.ordenacaoDesc = false;
    $scope.escalaGrafico = 'celcius';
    $scope.carregando = true;

    $scope.selecionarEscalaGrafico = function(escala){
        if($scope.escalaGrafico == escala)
            return;

        $scope.escalaGrafico = escala;
        $scope.carregarGrafico();
    }

    $scope.series = ['Máxima', 'Mínima'];

    $scope.alterarOrdenacao = function(orderBy){
        if($scope.orderBy === orderBy)
            return $scope.ordenacaoDesc = !$scope.ordenacaoDesc; 

        $scope.orderBy = orderBy;
        $scope.ordenacaoDesc = false;
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
                minima: 'lowCelcius'
            },
            'fahrenheit' : { 
                maxima : 'highFahrenheit',
                minima:  'lowFahrenheit' 
            }
        };


        var propriedade = propriedadeEscala[$scope.escalaGrafico];

        $scope.maioresTemps  = $filter('orderBy')($scope.previsaoTempo.channel.item.forecast, propriedade.maxima).slice(-5);
        $scope.data = [ 
            $scope.maioresTemps.map(function(temp){ return temp[propriedade.maxima]; }),
            $scope.maioresTemps.map(function(temp){ return  temp[propriedade.minima]; })
        ];
        $scope.labels = $scope.maioresTemps.map(function(temp){ return $filter('date')(temp.date, 'dd/MM/yyyy'); });
        console.log($scope.data);

        $scope.carregando = false;
    };

    $scope.load();

    $interval($scope.load, 5000);
}]);
