<html lang="en">
<head>
  <meta charset="UTF-8">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Monitoring Bencana Kekeringan</title>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <meta name="theme-color" content="#000072" />
  <link rel="apple-touch-icon" href="./materialize/rose.png" />
  <link rel="shortcut icon" href="./materialize/rose.png" />
</head>

<body style="font-family:Nunito,sans-serif;">
  <header class="p-3 mb-2 bg-primary text-white">
    <div class="jumbotron text-center">
      <h1>Monitoring Parameter Bencana Kekeringan</h1>
      <p class="lead text-dark">Cegah kekeringan dengan pengawasan.</p> 
    </div>
  </header>

  <div class="container p-3 mb-2 bg-light">  
           <div class="row">  
               <div class="col s12 m6 l4">  
                   <div class="card rounded img-fluid" style="width: 18rem;">
                      <img class="card-img-top" src="./materialize/1.png" alt="Card image cap">
                      <div class="card-body text-center">
                        <p class="h5">Curah Hujan dalam 24 Jam</p>
                        <span class="black-text force-center" id="data1"></span>
                      </div>
                    </div>
               </div>  
               <div class="col s12 m6 l4">  
                   <div class="card rounded img-fluid" style="width: 18rem;">
                      <img class="card-img-top" src="./materialize/23.png" alt="Card image cap">
                      <div class="card-body text-center">
                        <p class="h5">Kelembaban Tanah 1</p>
                        <span class="black-text force-center" id="data2"></span>
                      </div>
                    </div>
               </div>  
               <div class="col s12 m6 l4">  
                   <div class="card rounded img-fluid" style="width: 18rem;">
                      <img class="card-img-top" src="./materialize/3.jpg" alt="Card image cap">
                      <div class="card-body text-center">
                        <p class="h5">Kelembaban Tanah 2</p>
                        <span class="black-text force-center" id="data3"></span>
                      </div>
                    </div>
               </div>  
           </div>  

           <div class="container pt-4">
            <div class="row">
              <div class="col text-center">
                <button class="btn btn-primary" id="upd">Update Data</button>
              </div>
            </div>
          </div>

          <div class="row">
                <div class="chart-data">  
                    <canvas id="chart1"></canvas>  
                </div>
           </div> 

</body>

<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="./materialize/js/custom.js"></script>
</html>