import React, { useState } from 'react';
import { Search, MapPin, Calculator, TrendingUp, Home, Star, Filter, ChevronRight, Percent, Building, Users, DollarSign } from 'lucide-react';

const RealEstatePlatform = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedCity, setSelectedCity] = useState('Astana');
  const [budget, setBudget] = useState(25000000);
  const [income, setIncome] = useState(350000);

  const cities = ['Astana', 'Almaty', 'Shymkent', 'Karaganda'];
  
  const mortgagePrograms = [
    {
      name: 'Nauryz Program',
      rate: '7%',
      downPayment: '20%',
      maxAmount: '50M KZT',
      type: 'Government Subsidized',
      popularity: 95
    },
    {
      name: 'Otau Program', 
      rate: '9%',
      downPayment: '20%',
      maxAmount: '35M KZT',
      type: 'Government Subsidized',
      popularity: 88
    },
    {
      name: 'Commercial Bank',
      rate: '14.5%',
      downPayment: '30%',
      maxAmount: '40M KZT',
      type: 'Commercial',
      popularity: 12
    }
  ];

  const neighborhoods = [
    {
      name: 'Esil District',
      city: 'Astana',
      avgPrice: 320000,
      priceGrowth: '+2.1%',
      affordabilityScore: 78,
      features: ['New Development', 'Good Transport', 'Shopping Centers'],
      aiRecommendation: 'Excellent match for your budget and preferences'
    },
    {
      name: 'Almaly District',
      city: 'Almaty', 
      avgPrice: 380000,
      priceGrowth: '+1.8%',
      affordabilityScore: 65,
      features: ['Central Location', 'Metro Access', 'Historic Area'],
      aiRecommendation: 'Slightly above budget but great investment potential'
    },
    {
      name: 'Saryarka District',
      city: 'Astana',
      avgPrice: 280000,
      priceGrowth: '+3.2%',
      affordabilityScore: 85,
      features: ['Affordable', 'Family-friendly', 'Growing Area'],
      aiRecommendation: 'Perfect affordability match with growth potential'
    }
  ];

  const apartmentListings = [
    {
      id: 1,
      title: '2-bedroom apartment in Esil District',
      price: 28500000,
      monthlyPayment: 168000,
      area: 65,
      floor: '7/12',
      image: '/api/placeholder/300/200',
      aiScore: 92,
      matchReason: 'Perfect budget fit with excellent mortgage terms'
    },
    {
      id: 2, 
      title: '3-bedroom apartment in Saryarka',
      price: 24800000,
      monthlyPayment: 145000,
      area: 78,
      floor: '5/9',
      image: '/api/placeholder/300/200',
      aiScore: 89,
      matchReason: 'Great value with government subsidy eligibility'
    },
    {
      id: 3,
      title: '1-bedroom apartment in Centre',
      price: 32000000,
      monthlyPayment: 195000,
      area: 45,
      floor: '15/20',
      image: '/api/placeholder/300/200',
      aiScore: 71,
      matchReason: 'Premium location but higher monthly payments'
    }
  ];

  const AffordabilityCalculator = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="text-blue-600" size={24} />
        <h2 className="text-xl font-bold">AI Affordability Calculator</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Monthly Income (KZT)</label>
            <input 
              type="number" 
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="350,000"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Desired Budget (KZT)</label>
            <input 
              type="number" 
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="25,000,000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">City</label>
            <select 
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-4">AI Analysis Results</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Affordability Score:</span>
              <span className="font-bold text-green-600">78/100</span>
            </div>
            
            <div className="flex justify-between">
              <span>Recommended Budget:</span>
              <span className="font-bold">{(budget * 0.85).toLocaleString()} KZT</span>
            </div>
            
            <div className="flex justify-between">
              <span>Best Mortgage Program:</span>
              <span className="font-bold text-blue-600">Nauryz (7%)</span>
            </div>
            
            <div className="flex justify-between">
              <span>Monthly Payment:</span>
              <span className="font-bold">{Math.floor(budget * 0.007).toLocaleString()} KZT</span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-white rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-gray-700">
              <strong>AI Recommendation:</strong> Your income supports this budget comfortably. 
              Consider government subsidized programs for optimal terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const MortgageComparison = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Percent className="text-green-600" size={24} />
        <h2 className="text-xl font-bold">Mortgage Program Comparison</h2>
      </div>

      <div className="grid gap-4">
        {mortgagePrograms.map((program, index) => (
          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg">{program.name}</h3>
                <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                  program.type === 'Government Subsidized' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {program.type}
                </span>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{program.rate}</div>
                <div className="text-sm text-gray-600">Interest Rate</div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <div className="text-gray-600">Down Payment</div>
                <div className="font-semibold">{program.downPayment}</div>
              </div>
              <div>
                <div className="text-gray-600">Max Amount</div>
                <div className="font-semibold">{program.maxAmount}</div>
              </div>
              <div>
                <div className="text-gray-600">Popularity</div>
                <div className="font-semibold text-green-600">{program.popularity}%</div>
              </div>
            </div>

            <div className="mt-3 bg-gray-50 rounded p-2">
              <div className="text-xs text-gray-600 mb-1">Monthly payment for 25M KZT apartment:</div>
              <div className="font-bold text-lg">
                {Math.floor(25000000 * (parseFloat(program.rate) / 100 / 12) / (1 - Math.pow(1 + parseFloat(program.rate) / 100 / 12, -20 * 12))).toLocaleString()} KZT
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-bold text-blue-800 mb-2">💡 AI Insight</h4>
        <p className="text-blue-700 text-sm">
          Based on survey data, 99% of buyers prefer government-subsidized programs. 
          The Nauryz program offers the best terms for first-time buyers with your income level.
        </p>
      </div>
    </div>
  );

  const NeighborhoodRecommendations = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="text-purple-600" size={24} />
        <h2 className="text-xl font-bold">AI Neighborhood Recommendations</h2>
      </div>

      <div className="grid gap-4">
        {neighborhoods.filter(n => n.city === selectedCity).map((neighborhood, index) => (
          <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg">{neighborhood.name}</h3>
                <p className="text-gray-600 text-sm">{neighborhood.city}</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-purple-600">{neighborhood.affordabilityScore}/100</div>
                <div className="text-sm text-gray-600">Affordability Score</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-3">
              <div>
                <div className="text-sm text-gray-600">Avg. Price per m²</div>
                <div className="font-bold">{neighborhood.avgPrice.toLocaleString()} KZT</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">Price Growth (YoY)</div>
                <div className="font-bold text-green-600">{neighborhood.priceGrowth}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {neighborhood.features.map((feature, idx) => (
                <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                  {feature}
                </span>
              ))}
            </div>

            <div className="p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
              <div className="text-sm font-medium text-purple-800 mb-1">🤖 AI Recommendation:</div>
              <p className="text-sm text-purple-700">{neighborhood.aiRecommendation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ApartmentListings = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Home className="text-orange-600" size={24} />
          <h2 className="text-xl font-bold">AI-Recommended Apartments</h2>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
          <Filter size={16} />
          Advanced Filters
        </button>
      </div>

      <div className="grid gap-6">
        {apartmentListings.map((apartment) => (
          <div key={apartment.id} className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Building className="text-gray-500" size={48} />
                </div>
              </div>
              
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-bold text-xl mb-2">{apartment.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span>{apartment.area} m²</span>
                      <span>Floor {apartment.floor}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="text-yellow-500 fill-current" size={16} />
                      <span className="font-bold text-lg">{apartment.aiScore}%</span>
                    </div>
                    <div className="text-xs text-gray-600">AI Match Score</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-gray-600">Total Price</div>
                    <div className="font-bold text-xl text-green-600">
                      {apartment.price.toLocaleString()} KZT
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Monthly Payment*</div>
                    <div className="font-bold text-xl text-blue-600">
                      {apartment.monthlyPayment.toLocaleString()} KZT
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-orange-50 rounded-lg mb-4">
                  <div className="text-sm font-medium text-orange-800 mb-1">🎯 AI Analysis:</div>
                  <p className="text-sm text-orange-700">{apartment.matchReason}</p>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                  View Details & Schedule Visit
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-xs text-gray-600">
        * Monthly payments calculated using Nauryz program (7% interest, 20 year term)
      </div>
    </div>
  );

  const Dashboard = () => (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 text-white rounded-2xl p-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-4">
            Find Your Perfect Home with AI-Powered Recommendations
          </h1>
          <p className="text-blue-100 mb-6">
            Our intelligent platform analyzes government subsidies, mortgage programs, and neighborhood data 
            to help you make the best real estate decision in Kazakhstan.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Start Your Search
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Calculate Affordability
            </button>
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg. Interest Rate</p>
              <p className="text-2xl font-bold text-green-600">7.5%</p>
            </div>
            <Percent className="text-green-600" size={32} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Listings</p>
              <p className="text-2xl font-bold text-blue-600">12,547</p>
            </div>
            <Building className="text-blue-600" size={32} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Govt. Programs</p>
              <p className="text-2xl font-bold text-purple-600">8</p>
            </div>
            <DollarSign className="text-purple-600" size={32} />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Happy Clients</p>
              <p className="text-2xl font-bold text-orange-600">2,847</p>
            </div>
            <Users className="text-orange-600" size={32} />
          </div>
        </div>
      </div>

      {/* Quick Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <div 
          className="bg-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => setActiveTab('calculator')}
        >
          <Calculator className="text-blue-600 mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2">Affordability Calculator</h3>
          <p className="text-gray-600 text-sm mb-4">
            Get personalized budget recommendations based on your income and preferences.
          </p>
          <button className="text-blue-600 font-semibold flex items-center gap-2">
            Calculate Now <ChevronRight size={16} />
          </button>
        </div>

        <div 
          className="bg-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => setActiveTab('mortgages')}
        >
          <Percent className="text-green-600 mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2">Mortgage Comparison</h3>
          <p className="text-gray-600 text-sm mb-4">
            Compare all available mortgage programs including government subsidies.
          </p>
          <button className="text-green-600 font-semibold flex items-center gap-2">
            Compare Programs <ChevronRight size={16} />
          </button>
        </div>

        <div 
          className="bg-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => setActiveTab('neighborhoods')}
        >
          <MapPin className="text-purple-600 mb-4" size={32} />
          <h3 className="font-bold text-lg mb-2">Neighborhood Insights</h3>
          <p className="text-gray-600 text-sm mb-4">
            Discover the best neighborhoods that match your budget and lifestyle.
          </p>
          <button className="text-purple-600 font-semibold flex items-center gap-2">
            Explore Areas <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Home className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Kazakhstan AI Real Estate</h1>
                <p className="text-sm text-gray-600">Powered by Machine Learning</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'dashboard' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setActiveTab('calculator')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'calculator' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Calculator
              </button>
              <button 
                onClick={() => setActiveTab('mortgages')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'mortgages' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Mortgages
              </button>
              <button 
                onClick={() => setActiveTab('neighborhoods')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'neighborhoods' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Neighborhoods
              </button>
              <button 
                onClick={() => setActiveTab('listings')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeTab === 'listings' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Listings
              </button>
            </nav>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input 
                  type="text" 
                  placeholder="Search apartments..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'calculator' && <AffordabilityCalculator />}
        {activeTab === 'mortgages' && <MortgageComparison />}
        {activeTab === 'neighborhoods' && <NeighborhoodRecommendations />}
        {activeTab === 'listings' && <ApartmentListings />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <p className="mb-2">🤖 Powered by Advanced AI & Machine Learning</p>
            <p className="text-gray-400 text-sm">
              Helping Kazakhstani families make smarter real estate decisions since 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RealEstatePlatform;