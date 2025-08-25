  // Dados fictícios dos dispositivos
        const devices = [
            {
                id: 1,
                usuario: "Ana Silva",
                dispositivo: "Workstation-01",
                so: "Windows 11",
                ip: "192.168.1.101",
                ultimoAcesso: "2025-08-22 14:30:15",
                processosSuspeitos: 0,
                porteArquivoIncomum: false,
                trafegoAnomalo: false,
                status: "Seguro",
                x: 60,
                y: 40
            },
            {
                id: 2,
                usuario: "Carlos Mendes",
                dispositivo: "Laptop-Finance",
                so: "macOS 14",
                ip: "192.168.1.102",
                ultimoAcesso: "2025-08-22 14:28:42",
                processosSuspeitos: 3,
                porteArquivoIncomum: true,
                trafegoAnomalo: true,
                status: "Inseguro",
                x: 80,
                y: 70
            },
            {
                id: 3,
                usuario: "Maria Santos",
                dispositivo: "Terminal-Caixa-03",
                so: "Linux Ubuntu",
                ip: "192.168.1.103",
                ultimoAcesso: "2025-08-22 14:32:01",
                processosSuspeitos: 0,
                porteArquivoIncomum: false,
                trafegoAnomalo: false,
                status: "Seguro",
                x: 30,
                y: 80
            },
            {
                id: 4,
                usuario: "Pedro Oliveira",
                dispositivo: "Server-DB-Primary",
                so: "Windows Server 2022",
                ip: "192.168.1.104",
                ultimoAcesso: "2025-08-22 14:29:33",
                processosSuspeitos: 7,
                porteArquivoIncomum: true,
                trafegoAnomalo: true,
                status: "Inseguro",
                x: 20,
                y: 30
            },
            {
                id: 5,
                usuario: "Julia Costa",
                dispositivo: "Mobile-Banking-App",
                so: "Android 14",
                ip: "192.168.1.105",
                ultimoAcesso: "2025-08-22 14:31:18",
                processosSuspeitos: 0,
                porteArquivoIncomum: false,
                trafegoAnomalo: false,
                status: "Seguro",
                x: 85,
                y: 25
            },
            {
                id: 6,
                usuario: "Roberto Lima",
                dispositivo: "ATM-Centro-01",
                so: "Windows 10 IoT",
                ip: "192.168.1.106",
                ultimoAcesso: "2025-08-22 14:25:47",
                processosSuspeitos: 2,
                porteArquivoIncomum: false,
                trafegoAnomalo: true,
                status: "Inseguro",
                x: 70,
                y: 15
            },
            {
                id: 7,
                usuario: "Fernanda Reis",
                dispositivo: "Tablet-Gerencia",
                so: "iOS 17",
                ip: "192.168.1.107",
                ultimoAcesso: "2025-08-22 14:33:52",
                processosSuspeitos: 0,
                porteArquivoIncomum: false,
                trafegoAnomalo: false,
                status: "Seguro",
                x: 40,
                y: 60
            },
            {
                id: 8,
                usuario: "Marcos Ferreira",
                dispositivo: "Workstation-TI",
                so: "Linux Fedora",
                ip: "192.168.1.108",
                ultimoAcesso: "2025-08-22 14:27:21",
                processosSuspeitos: 1,
                porteArquivoIncomum: true,
                trafegoAnomalo: false,
                status: "Inseguro",
                x: 15,
                y: 55
            },
            {
                id: 9,
                usuario: "Carla Andrade",
                dispositivo: "POS-Terminal-05",
                so: "Windows 11",
                ip: "192.168.1.109",
                ultimoAcesso: "2025-08-22 14:34:15",
                processosSuspeitos: 0,
                porteArquivoIncomum: false,
                trafegoAnomalo: false,
                status: "Seguro",
                x: 90,
                y: 45
            },
            {
                id: 10,
                usuario: "Diego Souza",
                dispositivo: "Laptop-Auditoria",
                so: "Windows 11",
                ip: "192.168.1.110",
                ultimoAcesso: "2025-08-22 14:26:38",
                processosSuspeitos: 4,
                porteArquivoIncomum: true,
                trafegoAnomalo: true,
                status: "Inseguro",
                x: 50,
                y: 20
            },
            {
                id: 11,
                usuario: "Beatriz Alves",
                dispositivo: "Scanner-Docs-02",
                so: "Linux Mint",
                ip: "192.168.1.111",
                ultimoAcesso: "2025-08-22 14:35:42",
                processosSuspeitos: 0,
                porteArquivoIncomum: false,
                trafegoAnomalo: false,
                status: "Seguro",
                x: 25,
                y: 75
            },
            {
                id: 12,
                usuario: "Thiago Nunes",
                dispositivo: "Camera-Seguranca-01",
                so: "Embedded Linux",
                ip: "192.168.1.112",
                ultimoAcesso: "2025-08-22 14:22:19",
                processosSuspeitos: 5,
                porteArquivoIncomum: false,
                trafegoAnomalo: true,
                status: "Inseguro",
                x: 75,
                y: 85
            }
        ];

        let isRadarPaused = false;
        let events = [];

        // Função para simular análise de IA (seria substituída pela API Gemini)
        function simulateAIAnalysis(device) {
            // PONTO DE INTEGRAÇÃO COM GEMINI API:
            // Esta função seria substituída por uma chamada real à API do Google Gemini
            // Exemplo: const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent', {...});
            
            const analyses = {
                safe: [
                    {
                        risco: "Baixo",
                        explicacao: "Dispositivo apresenta comportamento normal. Todos os processos são legítimos e o tráfego de rede está dentro dos padrões esperados.",
                        acoesRecomendadas: "Manter monitoramento regular e aplicar atualizações de segurança conforme disponíveis."
                    },
                    {
                        risco: "Baixo",
                        explicacao: "Sistema operacional atualizado, sem processos suspeitos detectados. Padrões de acesso estão normais.",
                        acoesRecomendadas: "Continuar com as práticas de segurança atuais. Revisar logs periodicamente."
                    }
                ],
                unsafe: [
                    {
                        risco: "Alto",
                        explicacao: "Detectados múltiplos processos suspeitos executando em background. Possível presença de malware ou software não autorizado.",
                        acoesRecomendadas: "Isolar dispositivo imediatamente. Executar varredura completa com antimalware atualizado. Verificar logs de sistema detalhadamente."
                    },
                    {
                        risco: "Crítico",
                        explicacao: "Tráfego anômalo detectado com comunicação para servidores externos suspeitos. Arquivos com assinaturas desconhecidas identificados.",
                        acoesRecomendadas: "Desconectar dispositivo da rede. Realizar análise forense completa. Alterar credenciais de acesso relacionadas."
                    },
                    {
                        risco: "Médio",
                        explicacao: "Comportamento atípico nos padrões de uso. Processos com elevado consumo de recursos sem justificativa aparente.",
                        acoesRecomendadas: "Monitoramento intensificado. Verificar aplicações instaladas recentemente. Considerar reimagem do sistema."
                    }
                ]
            };

            const category = device.status === "Seguro" ? "safe" : "unsafe";
            const options = analyses[category];
            return options[Math.floor(Math.random() * options.length)];
        }

        // Inicializar radar
        function initRadar() {
            const radar = document.getElementById('radar');
            
            devices.forEach(device => {
                const deviceElement = document.createElement('div');
                deviceElement.className = `device ${device.status === 'Seguro' ? 'safe' : 'unsafe'}`;
                deviceElement.innerHTML = device.status === 'Seguro' ? '✅' : '👻';
                
                // Posicionar dispositivo no radar
                deviceElement.style.left = `${device.x}%`;
                deviceElement.style.top = `${device.y}%`;
                deviceElement.style.transform = 'translate(-50%, -50%)';
                
                deviceElement.setAttribute('data-device-id', device.id);
                deviceElement.setAttribute('tabindex', '0');
                deviceElement.setAttribute('role', 'button');
                deviceElement.setAttribute('aria-label', `${device.usuario} - ${device.dispositivo} - Status: ${device.status}`);
                
                deviceElement.addEventListener('click', () => analyzeDevice(device));
                deviceElement.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        analyzeDevice(device);
                    }
                });
                
                radar.appendChild(deviceElement);
            });

            updateNetworkStats();
            startEventLogging();
        }

        // Analisar dispositivo
        async function analyzeDevice(device) {
            const analysisDiv = document.getElementById('deviceAnalysis');
            
            // Mostrar informações do dispositivo
            analysisDiv.innerHTML = `
                <div class="device-info">
                    <div class="info-row">
                        <span class="info-label">Usuário:</span>
                        <span class="info-value">${device.usuario}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Dispositivo:</span>
                        <span class="info-value">${device.dispositivo}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Sistema:</span>
                        <span class="info-value">${device.so}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">IP:</span>
                        <span class="info-value">${device.ip}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Último Acesso:</span>
                        <span class="info-value">${device.ultimoAcesso}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Processos Suspeitos:</span>
                        <span class="info-value">${device.processosSuspeitos}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Tráfego Anômalo:</span>
                        <span class="info-value">${device.trafegoAnomalo ? 'Sim' : 'Não'}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Status:</span>
                        <span class="info-value">${device.status === 'Seguro' ? '✅' : '👻'} ${device.status}</span>
                    </div>
                </div>
                
                <div class="ai-analysis">
                    <div class="loading">
                        <div class="spinner"></div>
                        <span>⏳ Analisando dispositivo com IA...</span>
                    </div>
                </div>
            `;

            // Simular delay da análise de IA
            setTimeout(() => {
                const analysis = simulateAIAnalysis(device);
                
                const aiDiv = analysisDiv.querySelector('.ai-analysis');
                aiDiv.innerHTML = `
                    <h4 style="color: #0066ff; margin-bottom: 10px;">🤖 Análise da IA</h4>
                    <div class="info-row">
                        <span class="info-label">Nível de Risco:</span>
                        <span class="risk-level risk-${analysis.risco.toLowerCase()}">${analysis.risco}</span>
                    </div>
                    <p style="margin: 10px 0;"><strong>Explicação:</strong> ${analysis.explicacao}</p>
                    <p><strong>Ações Recomendadas:</strong> ${analysis.acoesRecomendadas}</p>
                `;

                // Adicionar evento ao log
                addEvent({
                    tipo: device.status === 'Seguro' ? 'safe' : 'danger',
                    mensagem: `Dispositivo ${device.dispositivo} analisado - Risco: ${analysis.risco}`,
                    timestamp: new Date().toLocaleTimeString()
                });
            }, 2000);
        }

        // Atualizar estatísticas da rede
        function updateNetworkStats() {
            const safeDevices = devices.filter(d => d.status === 'Seguro').length;
            const unsafeDevices = devices.filter(d => d.status === 'Inseguro').length;
            
            document.getElementById('safeCount').textContent = safeDevices;
            document.getElementById('unsafeCount').textContent = unsafeDevices;
            document.getElementById('lastScan').textContent = new Date().toLocaleTimeString();
        }

        // Sistema de eventos em tempo real
        function startEventLogging() {
            setInterval(() => {
                if (Math.random() < 0.3) { // 30% chance de gerar evento a cada 3 segundos
                    const eventTypes = [
                        { tipo: 'safe', msgs: ['Sistema de backup executado com sucesso', 'Atualização de segurança aplicada', 'Login autorizado detectado'] },
                        { tipo: 'warning', msgs: ['Tentativa de login falhada detectada', 'Tráfego elevado na rede', 'Processo com alto consumo de CPU'] },
                        { tipo: 'danger', msgs: ['Possível tentativa de invasão bloqueada', 'Malware detectado e isolado', 'Comunicação suspeita com servidor externo'] }
                    ];
                    
                    const selectedType = eventTypes[Math.floor(Math.random() * eventTypes.length)];
                    const selectedMsg = selectedType.msgs[Math.floor(Math.random() * selectedType.msgs.length)];
                    
                    addEvent({
                        tipo: selectedType.tipo,
                        mensagem: selectedMsg,
                        timestamp: new Date().toLocaleTimeString()
                    });
                }
            }, 3000);
        }

        // Adicionar evento ao log
        function addEvent(event) {
            events.unshift(event);
            if (events.length > 50) events.pop(); // Manter apenas os 50 mais recentes
            
            const eventsLog = document.getElementById('eventsLog');
            const eventDiv = document.createElement('div');
            eventDiv.className = `event ${event.tipo}`;
            eventDiv.innerHTML = `<strong>${event.timestamp}</strong> - ${event.mensagem}`;
            
            eventsLog.insertBefore(eventDiv, eventsLog.firstChild);
            if (eventsLog.children.length > 10) {
                eventsLog.removeChild(eventsLog.lastChild);
            }
        }

        // Modal de dispositivos
        function openDevicesModal() {
            document.getElementById('devicesModal').style.display = 'block';
            document.getElementById('devicesModal').setAttribute('aria-hidden', 'false');
            populateDevicesTable();
            document.getElementById('searchInput').focus();
        }

        function closeDevicesModal() {
            document.getElementById('devicesModal').style.display = 'none';
            document.getElementById('devicesModal').setAttribute('aria-hidden', 'true');
        }

        // Preencher tabela de dispositivos
        function populateDevicesTable() {
            const tbody = document.getElementById('devicesTableBody');
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const statusFilter = document.getElementById('statusFilter').value;
            
            let filteredDevices = devices.filter(device => {
                const matchesSearch = !searchTerm || 
                    device.usuario.toLowerCase().includes(searchTerm) ||
                    device.dispositivo.toLowerCase().includes(searchTerm) ||
                    device.ip.includes(searchTerm);
                
                const matchesStatus = !statusFilter || device.status === statusFilter;
                
                return matchesSearch && matchesStatus;
            });
            
            tbody.innerHTML = '';
            filteredDevices.forEach(device => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>
                        <span class="status-badge status-${device.status === 'Seguro' ? 'safe' : 'unsafe'}">
                            ${device.status === 'Seguro' ? '✅' : '👻'} ${device.status}
                        </span>
                    </td>
                    <td>${device.usuario}</td>
                    <td>${device.dispositivo}</td>
                    <td>${device.so}</td>
                    <td>${device.ip}</td>
                    <td>${device.ultimoAcesso}</td>
                    <td>${device.processosSuspeitos}</td>
                `;
                tbody.appendChild(row);
            });
        }

        // Exportar para CSV
        function exportCSV() {
            const headers = ['Status', 'Usuario', 'Dispositivo', 'SO', 'IP', 'Ultimo_Acesso', 'Processos_Suspeitos', 'Trafego_Anomalo'];
            const csvContent = [
                headers.join(','),
                ...devices.map(device => [
                    device.status,
                    device.usuario,
                    device.dispositivo,
                    device.so,
                    device.ip,
                    device.ultimoAcesso,
                    device.processosSuspeitos,
                    device.trafegoAnomalo ? 'Sim' : 'Nao'
                ].join(','))
            ].join('\n');
            
            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `dispositivos_seguranca_${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            addEvent({
                tipo: 'safe',
                mensagem: 'Relatório CSV exportado com sucesso',
                timestamp: new Date().toLocaleTimeString()
            });
        }

        // Controlar radar
        function toggleRadar() {
            const radarSweep = document.getElementById('radarSweep');
            const btn = event.target;
            
            if (isRadarPaused) {
                radarSweep.style.animationPlayState = 'running';
                btn.innerHTML = '⏸️ Pausar Radar';
                btn.setAttribute('aria-label', 'Pausar radar');
                isRadarPaused = false;
            } else {
                radarSweep.style.animationPlayState = 'paused';
                btn.innerHTML = '▶️ Continuar Radar';
                btn.setAttribute('aria-label', 'Continuar radar');
                isRadarPaused = true;
            }
        }

        // Event listeners
        document.getElementById('searchInput').addEventListener('input', populateDevicesTable);
        document.getElementById('statusFilter').addEventListener('change', populateDevicesTable);

        // Fechar modal com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeDevicesModal();
            }
        });

        // Fechar modal clicando fora
        window.addEventListener('click', (e) => {
            const modal = document.getElementById('devicesModal');
            if (e.target === modal) {
                closeDevicesModal();
            }
        });

        // Inicializar sistema
        document.addEventListener('DOMContentLoaded', () => {
            initRadar();
            
            // Adicionar evento inicial
            addEvent({
                tipo: 'safe',
                mensagem: 'Sistema de monitoramento iniciado com sucesso',
                timestamp: new Date().toLocaleTimeString()
            });
            
            // Atualizar estatísticas periodicamente
            setInterval(updateNetworkStats, 30000);
        });

        // Acessibilidade: navegação por teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                // Melhorar foco visual para elementos interativos
                const focusedElement = document.activeElement;
                if (focusedElement.classList.contains('device')) {
                    focusedElement.style.outline = '3px solid #00ff88';
                }
            }
        });

        document.addEventListener('focusout', (e) => {
            if (e.target.classList.contains('device')) {
                e.target.style.outline = 'none';
            }
        });