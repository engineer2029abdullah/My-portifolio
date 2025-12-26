import { stats } from './data.js';


const ctx1 = document.getElementById('Chart-1');

new Chart(ctx1, {
  type: 'polarArea',
  data: {
    labels: ['Employes', 'Teams'],
    datasets: [{
      label: '# of Votes',
      data: [stats.totalEmployes, stats.totalTeams],
      backgroundColor :[
        'rgba(0, 123, 255, 0.64)',
        'rgba(0, 0, 0, 0.64)',
      ],
    }]
  },
  options: {
    responsive: true,
  }
});


const ctx2 = document.getElementById('Chart-2');

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Process Tasks', 'Tasks Done'],
    datasets: [{
      label: 'Tasks',
      data: [stats.totalProcessTasks, stats.totalCompletedTasks],
      backgroundColor :[
        'rgba(0, 255, 149, 0.6)',
        'rgba(0, 123, 255, 1)',
      ],
    }]
  },
  options: {
    responsive: true,
  }
});