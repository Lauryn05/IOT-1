from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

network_device_configuration = {
    'hostname': 'Router1',
    'interfaces': {
        'eth0': {'ip': '192.168.1.1', 'subnet': '255.255.255.0'},
        'eth1': {'ip': '192.168.1.2', 'subnet': '255.255.255.0'},
    }
}

# Placeholder for traffic scenarios
traffic_scenarios = {
    'Scenario1': {'traffic_type': 'HTTP', 'duration': 60},
    'Scenario2': {'traffic_type': 'TCP', 'duration': 30},
    'Scenario3': {'traffic_type': 'ARP', 'duration': 20},
    'Scenario4': {'traffic_type': 'ICMP', 'duration': 10},
    'Scenario5': {'traffic_type': 'HTTP', 'duration': 40}
}

@app.route('/')
def index():
    return render_template('index.html', config=network_device_configuration, scenarios=traffic_scenarios)

@app.route('/configure', methods=['POST'])
def configure_device():
    # Placeholder for handling device configuration changes
    new_hostname = request.form.get('hostname')
    network_device_configuration['hostname'] = new_hostname
    # Handle other configuration changes
    return redirect(url_for('index'))

@app.route('/generate_traffic/<scenario_name>')
def generate_traffic(scenario_name):
    # Placeholder for handling traffic generation
    selected_scenario = traffic_scenarios.get(scenario_name)
    if selected_scenario:
        generated_traffic = f"Generating {selected_scenario['traffic_type']} traffic for {selected_scenario['duration']} seconds."
        selected_scenario['status'] = 'Generated'
        return generated_traffic + "<br>" + f"Traffic for {scenario_name} has been generated."
    else:
        return "Scenario not found."

@app.route('/topology')
def topology():
    return render_template('topology.html')

if __name__ == '__main__':
    app.run(debug=True)
