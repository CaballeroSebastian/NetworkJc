document.addEventListener('DOMContentLoaded', function() {
    const links = [
      { id: 1, url: 'https://www.twitch.tv/jcmorales_05', name: 'Twitch', icon: 'img/twitch.png' },
      { id: 2, url: 'https://www.tiktok.com/@jcmorales_05', name: 'TikTok', icon: 'img/tiktok.webp' },
      { id: 3, url: 'https://www.instagram.com/jcmorales_05/', name: 'Instagram', icon: 'img/instagram.png' },
      { id: 4, url: 'https://www.youtube.com/channel/UCf4EY3-xf3uEn1zeatH-aQA', name: 'Youtube', icon: 'img/youtube.png' },
      { id: 5, url: 'https://www.tiktok.com/@jcmorales_05', name: 'Discord', icon: 'img/discord.png' }
    ];
  
    const linksContainer = document.getElementById('links');
  
    links.forEach(link => {
      const a = document.createElement('a');
      a.href = link.url;
      a.innerHTML = `<img src="${link.icon}" alt="${link.name} icon"> ${link.name}`;
      a.target = '_blank';
      linksContainer.appendChild(a);
    });
  });
  