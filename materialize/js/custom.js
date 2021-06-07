$(window).on('load', () => {  
  // Inisialisasi variable  
  let data = 0 // Variable untuk fetching data    

  localStorage.setItem('dailyrain', JSON.stringify([]));
  localStorage.setItem('kelembabantitik1', JSON.stringify([]));
  localStorage.setItem('kelembabantitik2', JSON.stringify([]));
  localStorage.setItem('Label1', JSON.stringify([]));
  const chapter1 = ['dailyrain', 'kelembabantitik1', 'kelembabantitik2', 'Label1']

  // Variable untuk menampilkan data  
  const data1 = document.getElementById("data1")   
  const data2 = document.getElementById("data2")   
  const data3 = document.getElementById("data3") 
  
  
  // Inisialisasi fungsi mengambil data dari API  
  getEndpoint1 = () => {  
      return new Promise((resolve, reject) => {  
          $.ajax({  
          url : 'get.php',  
          type : 'GET',  
              success : (res) => {  
                  resolve(res)  
              },  
              error : (res) => {  
                  reject(res)  
              }  
          })  
      })  
    } 
   
  
  // Update HTML dari data API  
  const update1 = () => {  
      let js_obj_data = JSON.parse(data["m2m:cin"].con)   
  
      data1.innerHTML = js_obj_data["dailyrain"]  
      data2.innerHTML = js_obj_data["kelembabantitik1"]  
      data3.innerHTML = js_obj_data["kelembabantitik2"]    
  
      M.toast({html: "Data Updated!"})  
  }

  
  // Inisialisasi fungsi run   
  const run = () => {  
      data1.innerHTML = "Loading data..."  
      data2.innerHTML = "Loading data..."  
      data3.innerHTML = "Loading data..."   
         
      setTimeout(() => {  
          getEndpoint1()  
              .then((result) => {  
                  data = JSON.parse(JSON.parse(result))  
                  update1()
                  let js_obj_data = JSON.parse(data["m2m:cin"].con)
                  chapter1.forEach((x) => {
                      let nilai = localStorage.getItem(x)
                      nilai = JSON.parse(nilai)
                      if(x === "Label1"){
                        nilai.push(new Date().toLocaleTimeString())
                      } else {
                        nilai.push(js_obj_data[x])
                      }
                      localStorage.setItem(x, JSON.stringify(nilai))
                  })
                  let options = {
                    type: 'line',
                    data: {
                          labels: JSON.parse(localStorage.getItem("Label1")),
                          datasets: [
                              {
                                  label: 'dailyrain',
                                  data: JSON.parse(localStorage.getItem("dailyrain")),
                                  borderWidth: 1,
                                  fill : false,
                                  borderColor: 'rgba(255, 99, 132, 1)'
                              },
                              {
                                  label: 'kelembabantitik1',
                                  data: JSON.parse(localStorage.getItem("kelembabantitik1")),
                                  borderWidth: 1,
                                  fill : false,
                                  borderColor: 'rgba(54, 162, 235, 1)'
                              },
                              {
                                  label: 'kelembabantitik2',
                                  data: JSON.parse(localStorage.getItem("kelembabantitik2")),
                                  borderWidth: 1,
                                  fill : false,
                                  borderColor: 'rgba(255, 206, 86, 1)'
                              },
                          ]
                        },
                        options: {
                          scales: {
                              yAxes: [{
                                  ticks: {
                                      reverse: false
                                  }
                              }]
                          },
                          maintainAspectRatio : false,
                          aspectRatio : 1
                      }
                  }

                  execChart(options, 'chart1')
              })  
              .catch((error) => {  
                  console.log(error)  
                  M.toast({html: "Error while getting data!"})  
              })
      }, 1000)  
  }  
  
  // Menjalankan fungsi run di awal load page  
  run()  
  
  // Memberikan attribut onclick pada elemen dengan id upd (button update)  
  $("#upd").click(function() {  
      run()  
  })  
  
  const execChart = (options, target) => {  
      let ctx = document.getElementById(target).getContext('2d');  
      new Chart(ctx, options);  
  }  
})  