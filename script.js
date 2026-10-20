/* ===== DATA: [icon, title EN, title FIL, desc EN, desc FIL] ===== */
const ROLES = [
 ['💿','Install & Maintain Operating Systems','Mag-install at Mag-maintain ng OS','Sets up Windows and Linux systems, applies updates and patches, and keeps them stable.','Nagse-set up ng Windows at Linux, naglalagay ng updates at patches, at nagpapanatiling matatag ang system.'],
 ['👥','Manage User Accounts & Permissions','Pamahalaan ang Accounts at Permissions','Creates accounts, assigns groups and controls who can access files and services.','Gumagawa ng accounts, nagtatalaga ng groups, at kumokontrol kung sino ang may access sa files at services.'],
 ['📈','Monitor System Performance','Subaybayan ang Performance','Watches CPU, memory, disk and network usage to spot problems before users notice.','Binabantayan ang CPU, memory, disk at network para maagapan ang problema bago pa ito mapansin.'],
 ['💾','Backup & Recovery','Backup at Recovery','Schedules backups and tests restores so data can come back after a failure.','Nag-iiskedyul ng backups at nagte-test ng restore para maibalik ang data kapag may pagkasira.'],
 ['🛠️','Troubleshoot Hardware & Software','Ayusin ang Hardware at Software','Finds the root cause of errors, crashes and slowdowns, then fixes them.','Hinahanap ang ugat ng errors, crashes at bagal, saka inaayos ito.'],
 ['🔒','Security & Updates','Seguridad at Updates','Configures firewalls, applies security patches and protects systems from threats.','Nagko-configure ng firewall, naglalagay ng security patches, at pinoprotektahan ang system sa banta.']];
const SKILLS = [
 ['🌐','Networking','Networking','Technical','Teknikal','Understands IP addressing, DNS, DHCP and routing.','Nauunawaan ang IP addressing, DNS, DHCP at routing.'],
 ['🐧','Operating System Administration','OS Administration','Technical','Teknikal','Manages Linux and Windows servers confidently.','Marunong mamahala ng Linux at Windows servers.'],
 ['📜','Scripting & Automation','Scripting at Automation','Technical','Teknikal','Uses Bash or PowerShell to automate repeated tasks.','Gumagamit ng Bash o PowerShell para i-automate ang paulit-ulit na gawain.'],
 ['🛡️','Security Basics','Batayan ng Seguridad','Technical','Teknikal','Applies least privilege, patching and safe configuration.','Naglalapat ng least privilege, patching at ligtas na configuration.'],
 ['🧩','Problem-Solving','Paglutas ng Problema','Professional','Propesyonal','Breaks big problems into small steps and tests each one.','Hinahati ang malaking problema sa maliliit na hakbang at sinusubukan ang bawat isa.'],
 ['💬','Communication','Komunikasyon','Professional','Propesyonal','Explains technical issues clearly to non-technical users.','Naipapaliwanag nang malinaw ang teknikal na isyu sa karaniwang user.'],
 ['⏱️','Time Management','Pamamahala ng Oras','Professional','Propesyonal','Prioritizes urgent incidents and planned maintenance.','Inuuna ang urgent na insidente at planadong maintenance.'],
 ['🤝','Teamwork','Pagtutulungan','Professional','Propesyonal','Works with developers, managers and support staff.','Katuwang ang developers, managers at support staff.']];
const TOOLS = [
 ['🪟','Windows Server','Windows Server','Microsoft server OS for Active Directory, file sharing and enterprise services.','Server OS ng Microsoft para sa Active Directory, file sharing at enterprise services.'],
 ['🐧','Ubuntu Server','Ubuntu Server','Popular, free Linux server for web, database and cloud workloads.','Sikat at libreng Linux server para sa web, database at cloud.'],
 ['⚡','PowerShell','PowerShell','Command-line shell and scripting language for automating Windows tasks.','Command-line shell at scripting language para i-automate ang gawain sa Windows.'],
 ['🔑','SSH','SSH','Secure Shell: encrypted remote login to manage servers from anywhere.','Secure Shell: naka-encrypt na remote login para mapamahalaan ang servers kahit saan.'],
 ['📦','VirtualBox','VirtualBox','Runs virtual machines so you can practice safely on one computer.','Nagpapatakbo ng virtual machines para makapag-practice nang ligtas sa isang computer.'],
 ['📊','Nagios / Zabbix','Nagios / Zabbix','Monitoring tools that alert admins when a service or server goes down.','Monitoring tools na nag-aalerto sa admin kapag may service o server na bumagsak.']];

/* ===== FILIPINO DICTIONARY (English text is read from the HTML itself) ===== */
const FIL = {nav_home:'Tahanan',nav_roles:'Tungkulin',nav_skills:'Kasanayan',nav_tools:'Kagamitan',nav_term:'Terminal',nav_about:'Tungkol',
 hero_k:'Career Portfolio · Mga Pundasyon',hero_t:'Web-Based na Career Portfolio ng System Administrator',
 hero_p:'Ang System Administrator ang nagpapanatiling maayos ang takbo ng mga computer, server at network para makapagtrabaho ang lahat. Siya ang nag-i-install, nagse-secure, nagmo-monitor at nag-aayos ng mga sistemang inaasahan ng organisasyon araw-araw.',
 cta1:'Tuklasin ang karera',cta2:'Subukan ang terminal',roles_h:'Mga Tungkulin at Responsibilidad',skills_h:'Teknikal at Propesyonal na Kasanayan',
 tools_h:'Mga Kagamitan sa System Administration',term_h:'Subukan ang Linux Command Prompt',
 term_p:'Mag-type ng mga command tulad ng help, ls, whoami, neofetch o top. Pindutin ang ↑ para sa history at Tab para sa autocomplete.',
 about_h:'Tungkol sa Developer',about_prog:'Kurso / Programa: [Ilagay ang kurso mo]',
 about_p1:'Kumusta! Isa akong estudyanteng mahilig gumawa ng website at matuto kung paano gumagana ang mga computer at network sa likod ng screen.',
 about_p2:'Interesado ako sa IT industry dahil umaasa ang bawat organisasyon sa teknolohiya, at gusto kong maging isa sa mga nagpapanatili nitong maaasahan, ligtas at kapaki-pakinabang.',
 foot:'Gawa nang may ☕ at pagkamausisa'};
const TYPED = {en:['Keeping systems alive.','Linux · Windows · Networks','Always learning.'],fil:['Pinapanatiling buhay ang systems.','Linux · Windows · Network','Laging nag-aaral.']};

const $ = s => document.querySelector(s);
let lang = 'en';

/* ===== Cards + translator ===== */
document.querySelectorAll('[data-i18n]').forEach(e => e.dataset.en = e.textContent);
function card(ic, t, d, tag){ return `<article class="card reveal"><div class="ic">${ic}</div><h3>${t}</h3><p>${d}</p>${tag ? `<small>${tag}</small>` : ''}</article>`; }
function render(){
  const f = lang === 'fil';
  $('#rolesGrid').innerHTML = ROLES.map(r => card(r[0], r[f?2:1], r[f?4:3])).join('');
  $('#skillsGrid').innerHTML = SKILLS.map(s => card(s[0], s[f?2:1], s[f?6:5], s[f?4:3])).join('');
  $('#toolsGrid').innerHTML = TOOLS.map(t => card(t[0], t[f?2:1], t[f?4:3])).join('');
  document.querySelectorAll('[data-i18n]').forEach(e => e.textContent = f ? FIL[e.dataset.i18n] : e.dataset.en);
  document.documentElement.lang = lang;
  observe();
}
$('#lang').onchange = e => { lang = e.target.value; render(); typeIdx = 0; localStorage.setItem('lang', lang); };
const io = new IntersectionObserver(es => es.forEach(x => x.isIntersecting && x.target.classList.add('in')), {threshold:.15});
function observe(){ document.querySelectorAll('.reveal').forEach(e => io.observe(e)); }

/* ===== Nav ===== */
$('#burger').onclick = () => $('#menu').classList.toggle('open');
document.querySelectorAll('#menu a').forEach(a => a.onclick = () => $('#menu').classList.remove('open'));
const secs = [...document.querySelectorAll('section')];
addEventListener('scroll', () => {
  const y = scrollY + 120, cur = secs.filter(s => s.offsetTop <= y).pop();
  document.querySelectorAll('#menu a').forEach(a => a.classList.toggle('on', cur && a.hash === '#' + cur.id));
});

/* ===== Typing effect ===== */
let typeIdx = 0, ch = 0, del = false;
(function type(){
  const w = TYPED[lang][typeIdx % 3];
  ch += del ? -1 : 1;
  $('#typed').textContent = w.slice(0, ch);
  let wait = del ? 40 : 90;
  if (!del && ch === w.length){ del = true; wait = 1400; }
  else if (del && ch === 0){ del = false; typeIdx++; wait = 300; }
  setTimeout(type, wait);
})();

/* ===== Linux terminal simulator ===== */
const user = 'ivy', host = 'ubuntu-server';
let cwd = '~', hist = [], hi = 0;
const FS = {'~':['Documents','Downloads','portfolio','notes.txt','backup.sh'],'~/portfolio':['index.html','css','js','images'],'~/Documents':['network-plan.pdf','server-checklist.md']};
const FILES = {'notes.txt':'Check logs daily.\nBackup before updating.\nNever run unknown scripts as root.','backup.sh':'#!/bin/bash\ntar -czf /backup/home-$(date +%F).tar.gz /home/ivy\necho "Backup complete"'};
const up = () => Math.floor((Date.now() - T0) / 60000) + 12;
const T0 = Date.now();
const CMDS = {
 help: () => 'Available commands:\n help  ls  cd  pwd  cat  whoami  hostname  date  uname -a  neofetch\n ip a  ping  df -h  free -m  top  uptime  ps  systemctl status ssh\n sudo apt update  useradd  chmod  echo  history  roles  skills  tools  clear',
 ls: a => (FS[cwd] || []).join('  ') || '',
 pwd: () => cwd === '~' ? '/home/ivy' : '/home/ivy/' + cwd.slice(2),
 cd: a => { const t = !a[0] || a[0] === '~' ? '~' : a[0] === '..' ? '~' : (a[0].startsWith('~') ? a[0] : cwd + '/' + a[0]); if (FS[t]) { cwd = t; ps(); return ''; } return `bash: cd: ${a[0]}: No such file or directory`; },
 cat: a => FILES[a[0]] || `cat: ${a[0] || ''}: No such file or directory`,
 whoami: () => 'ivy', hostname: () => host,
 date: () => new Date().toString(),
 uname: () => 'Linux ubuntu-server 6.8.0-45-generic #45-Ubuntu SMP x86_64 GNU/Linux',
 uptime: () => ` up ${up()} min,  1 user,  load average: 0.12, 0.09, 0.05`,
 neofetch: () => `   .-/+oossssoo+/-.      ${user}@${host}\n :+ssssssssssssssssss+:   ----------------\n-+ssssssssssssssssssyy+-  OS: Ubuntu 24.04 LTS\n:ssssssssssssssssssssyyss: Kernel: 6.8.0-generic\n+sssssssssssssssssyyyyyss+ Uptime: ${up()} mins\n:ssssssssssssssssyyyyyyyss Shell: bash 5.2\n-+ssssssssssssssyyyyyyyy+- CPU: Virtual Core @ 2.4GHz\n  .-/+oossssoo+/-.        Memory: 612MiB / 2048MiB`,
 ip: () => '1: lo: <LOOPBACK,UP> mtu 65536\n    inet 127.0.0.1/8 scope host lo\n2: enp0s3: <BROADCAST,MULTICAST,UP> mtu 1500\n    inet 192.168.1.10/24 brd 192.168.1.255 scope global enp0s3',
 ping: a => { const h = a[0] || 'localhost'; return `PING ${h} (192.168.1.1) 56(84) bytes of data.\n64 bytes from ${h}: icmp_seq=1 ttl=64 time=0.41 ms\n64 bytes from ${h}: icmp_seq=2 ttl=64 time=0.38 ms\n64 bytes from ${h}: icmp_seq=3 ttl=64 time=0.40 ms\n--- ${h} ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss`; },
 df: () => 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        20G  6.2G   13G  33% /\ntmpfs           1.0G     0  1.0G   0% /dev/shm',
 free: () => '              total   used   free  shared  buff/cache  available\nMem:           2048    612    904       8         532       1340\nSwap:          1024      0   1024',
 top: () => `top - up ${up()} min,  1 user,  load average: 0.12, 0.09, 0.05\nTasks: 98 total,   1 running\n  PID USER   %CPU %MEM COMMAND\n  812 root    1.3  2.1 sshd\n 1024 www     0.7  3.4 nginx\n 1432 mysql   0.5  8.9 mysqld\n 2210 ivy     0.1  0.4 bash`,
 ps: () => '  PID TTY          TIME CMD\n 2210 pts/0    00:00:00 bash\n 2399 pts/0    00:00:00 ps',
 systemctl: a => a[0] === 'status' ? `● ${a[1] || 'ssh'}.service - OpenBSD Secure Shell server\n   Loaded: loaded (/lib/systemd/system/ssh.service; enabled)\n   Active: active (running) since today` : 'Usage: systemctl status <service>',
 sudo: a => a.join(' ') === 'apt update' ? 'Hit:1 http://archive.ubuntu.com/ubuntu noble InRelease\nGet:2 http://security.ubuntu.com noble-security InRelease [126 kB]\nReading package lists... Done\n12 packages can be upgraded.' : 'sudo: command simulated. Try: sudo apt update',
 useradd: a => a[0] ? `User '${a[0]}' created. (simulation)` : 'Usage: useradd <username>',
 chmod: a => a.length > 1 ? `mode of '${a[1]}' changed to ${a[0]}` : 'Usage: chmod 755 file',
 echo: a => a.join(' '),
 history: () => hist.map((h, i) => ` ${i + 1}  ${h}`).join('\n'),
 roles: () => ROLES.map(r => '• ' + r[1]).join('\n'),
 skills: () => SKILLS.map(r => '• ' + r[1] + ' (' + r[3] + ')').join('\n'),
 tools: () => TOOLS.map(r => '• ' + r[1]).join('\n'),
 clear: () => { $('#out').textContent = ''; return null; }
};
function ps(){ $('#ps').textContent = `${user}@${host}:${cwd}$`; }
function print(t){ const o = $('#out'); o.append(t + '\n'); o.scrollTop = o.scrollHeight; }
function run(line){
  print(`${user}@${host}:${cwd}$ ${line}`);
  const [c, ...a] = line.trim().split(/\s+/);
  if (!c) return;
  hist.push(line); hi = hist.length;
  const r = CMDS[c] ? CMDS[c](a) : `${c}: command not found. Type 'help'.`;
  if (r !== null && r !== '') print(r);
}
$('#cmd').addEventListener('keydown', e => {
  const i = e.target;
  if (e.key === 'Enter'){ run(i.value); i.value = ''; }
  else if (e.key === 'ArrowUp'){ e.preventDefault(); if (hi > 0) i.value = hist[--hi]; }
  else if (e.key === 'ArrowDown'){ e.preventDefault(); i.value = hi < hist.length - 1 ? hist[++hi] : (hi = hist.length, ''); }
  else if (e.key === 'Tab'){ e.preventDefault(); const m = Object.keys(CMDS).filter(k => k.startsWith(i.value)); if (m.length === 1) i.value = m[0] + ' '; }
});
$('#term').onclick = () => $('#cmd').focus();
$('#chips').innerHTML = ['help','ls','whoami','neofetch','top','ip a','df -h','roles'].map(c => `<button>${c}</button>`).join('');
$('#chips').onclick = e => e.target.tagName === 'BUTTON' && run(e.target.textContent);
ps(); print('Welcome to Ubuntu 24.04 LTS (simulated). Type "help" to begin.\n');

/* ===== Photo frame tilt ===== */
const tilt = $('#tilt');
tilt.onmousemove = e => { const r = tilt.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; tilt.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg)`; };
tilt.onmouseleave = () => tilt.style.transform = '';

lang = localStorage.getItem('lang') || 'en'; $('#lang').value = lang; render();

/* ===== Blazing blue fire (canvas, additive blending) ===== */
(function(){
  const cv = document.getElementById('fire'), cx = cv.getContext('2d');
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let W, H, F = [], mx = -1, my = -1, t = 0;
  const small = () => innerWidth < 700;
  function size(){ W = cv.width = innerWidth; H = cv.height = innerHeight; }
  size(); addEventListener('resize', size);
  addEventListener('pointermove', e => { mx = e.clientX; my = e.clientY; });
  addEventListener('pointerleave', () => mx = -1);
  function spawn(x, y, big){
    F.push({x, y, r: (big ? 26 : 16) + Math.random() * (big ? 34 : 30), vy: -(1.2 + Math.random() * (big ? 2.4 : 2)), vx: (Math.random() - .5) * .8,
      life: 0, max: 70 + Math.random() * 60, ph: Math.random() * 6});
  }
  function color(k, a){          // k: 0 = fresh (white-hot) -> 1 = dying (deep blue)
    if (k < .2) return `rgba(225,245,255,${a})`;
    if (k < .5) return `rgba(90,200,255,${a})`;
    if (k < .8) return `rgba(40,120,255,${a * .8})`;
    return `rgba(20,50,170,${a * .6})`;
  }
  (function loop(){
    t += .03;
    cx.globalCompositeOperation = 'source-over';
    cx.clearRect(0, 0, W, H);
    cx.globalCompositeOperation = 'lighter';
    const n = small() ? 3 : 7;
    for (let i = 0; i < n; i++){
      const x = Math.random() * W, boost = 1 + .6 * Math.sin(x * .01 + t);   // flame tongues of different heights
      if (Math.random() < boost * .6) spawn(x, H + 20, false);
    }
    if (mx >= 0 && Math.random() < .8) spawn(mx + (Math.random() - .5) * 20, my + 10, true);
    F = F.filter(p => p.life < p.max);
    for (const p of F){
      p.life++; const k = p.life / p.max;
      p.x += p.vx + Math.sin(t * 3 + p.ph) * .9; p.y += p.vy * (1 - k * .5);
      const r = p.r * (1 - k * .75), a = (1 - k) * .16;
      const g = cx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
      g.addColorStop(0, color(k, a * 2.2)); g.addColorStop(.5, color(Math.min(k + .25, 1), a)); g.addColorStop(1, 'rgba(10,30,120,0)');
      cx.fillStyle = g; cx.beginPath(); cx.arc(p.x, p.y, r, 0, 7); cx.fill();
    }
    if (F.length > 900) F.splice(0, F.length - 900);
    requestAnimationFrame(loop);
  })();
})();
