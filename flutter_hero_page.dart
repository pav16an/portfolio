import 'package:flutter/material.dart';

class HeroPage extends StatefulWidget {
  @override
  _HeroPageState createState() => _HeroPageState();
}

class _HeroPageState extends State<HeroPage> with TickerProviderStateMixin {
  late AnimationController _fadeController;
  late AnimationController _slideController;
  late Animation<double> _fadeAnimation;
  late Animation<Offset> _slideAnimation;
  bool _isDark = true;

  @override
  void initState() {
    super.initState();
    _fadeController = AnimationController(
      duration: Duration(milliseconds: 800),
      vsync: this,
    );
    _slideController = AnimationController(
      duration: Duration(milliseconds: 1000),
      vsync: this,
    );
    
    _fadeAnimation = Tween<double>(begin: 0.0, end: 1.0).animate(
      CurvedAnimation(parent: _fadeController, curve: Curves.easeInOut),
    );
    _slideAnimation = Tween<Offset>(begin: Offset(0, 0.3), end: Offset.zero).animate(
      CurvedAnimation(parent: _slideController, curve: Curves.easeOutBack),
    );
    
    _fadeController.forward();
    _slideController.forward();
  }

  @override
  void dispose() {
    _fadeController.dispose();
    _slideController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _isDark ? Color(0xFF0F172A) : Color(0xFFF0FDFA),
      body: Stack(
        children: [
          // Background Effects
          _buildBackgroundEffects(),
          
          // Navigation
          _buildNavigation(),
          
          // Main Content
          _buildMainContent(),
        ],
      ),
    );
  }

  Widget _buildBackgroundEffects() {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: _isDark 
            ? [Color(0xFF0F172A), Color(0xFF1E293B), Color(0xFF334155)]
            : [Color(0xFFF0FDFA), Color(0xFFE6FFFA), Color(0xFFB2F5EA)],
        ),
      ),
    );
  }

  Widget _buildNavigation() {
    return Positioned(
      top: 16,
      left: 16,
      right: 16,
      child: FadeTransition(
        opacity: _fadeAnimation,
        child: Container(
          padding: EdgeInsets.symmetric(horizontal: 24, vertical: 16),
          decoration: BoxDecoration(
            color: _isDark 
              ? Colors.grey[900]?.withOpacity(0.95)
              : Colors.white.withOpacity(0.95),
            borderRadius: BorderRadius.circular(50),
            border: Border.all(
              color: Color(0xFF06B6D4).withOpacity(0.3),
            ),
            boxShadow: [
              BoxShadow(
                color: Color(0xFF06B6D4).withOpacity(0.2),
                blurRadius: 20,
                spreadRadius: 0,
              ),
            ],
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                'Pavan',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: _isDark ? Colors.white : Colors.grey[900],
                ),
              ),
              Row(
                children: [
                  _buildNavItem('About'),
                  SizedBox(width: 16),
                  _buildNavItem('Projects'),
                  SizedBox(width: 16),
                  _buildNavItem('Contact'),
                  SizedBox(width: 16),
                  IconButton(
                    onPressed: () {
                      setState(() {
                        _isDark = !_isDark;
                      });
                    },
                    icon: Icon(
                      _isDark ? Icons.light_mode : Icons.dark_mode,
                      color: _isDark ? Colors.yellow : Colors.grey[700],
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildNavItem(String text) {
    return TextButton(
      onPressed: () {},
      child: Text(
        text,
        style: TextStyle(
          color: _isDark ? Colors.grey[300] : Colors.grey[600],
          fontWeight: FontWeight.w600,
        ),
      ),
    );
  }

  Widget _buildMainContent() {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 24),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Row(
            children: [
              // Text Content
              Expanded(
                flex: 3,
                child: SlideTransition(
                  position: _slideAnimation,
                  child: FadeTransition(
                    opacity: _fadeAnimation,
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Hi, I\'m',
                          style: TextStyle(
                            fontSize: 48,
                            fontWeight: FontWeight.bold,
                            color: _isDark ? Colors.white : Colors.grey[900],
                          ),
                        ),
                        ShaderMask(
                          shaderCallback: (bounds) => LinearGradient(
                            colors: [Color(0xFF06B6D4), Color(0xFF8B5CF6)],
                          ).createShader(bounds),
                          child: Text(
                            'Pavan Ayithireddy',
                            style: TextStyle(
                              fontSize: 48,
                              fontWeight: FontWeight.bold,
                              color: Colors.white,
                            ),
                          ),
                        ),
                        Text(
                          'AI/ML Developer',
                          style: TextStyle(
                            fontSize: 48,
                            fontWeight: FontWeight.bold,
                            color: _isDark ? Colors.white : Colors.grey[900],
                          ),
                        ),
                        SizedBox(height: 24),
                        Text(
                          'Building intelligent solutions with machine learning and data science. Specialized in computer vision, NLP, and predictive analytics.',
                          style: TextStyle(
                            fontSize: 18,
                            color: _isDark ? Colors.grey[300] : Colors.grey[600],
                            height: 1.6,
                          ),
                        ),
                        SizedBox(height: 32),
                        Row(
                          children: [
                            _buildButton('Download CV', true),
                            SizedBox(width: 16),
                            _buildButton('Let\'s Connect →', false),
                          ],
                        ),
                        SizedBox(height: 32),
                        Row(
                          children: [
                            _buildSocialIcon(Icons.code),
                            SizedBox(width: 16),
                            _buildSocialIcon(Icons.work),
                            SizedBox(width: 16),
                            _buildSocialIcon(Icons.email),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              
              SizedBox(width: 48),
              
              // Profile Image
              Expanded(
                flex: 2,
                child: FadeTransition(
                  opacity: _fadeAnimation,
                  child: Center(
                    child: Container(
                      width: 320,
                      height: 320,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: LinearGradient(
                          colors: [
                            Color(0xFF1F2937),
                            Color(0xFF374151),
                            Color(0xFF4B5563),
                          ],
                        ),
                        boxShadow: [
                          BoxShadow(
                            color: Color(0xFF06B6D4).withOpacity(0.3),
                            blurRadius: 50,
                            spreadRadius: 0,
                          ),
                        ],
                      ),
                      child: Padding(
                        padding: EdgeInsets.all(8),
                        child: Container(
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: Colors.grey[300],
                          ),
                          child: Icon(
                            Icons.person,
                            size: 150,
                            color: Colors.grey[600],
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
          
          SizedBox(height: 64),
          
          // Stats Section
          FadeTransition(
            opacity: _fadeAnimation,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                _buildStatItem('3+', 'Projects'),
                _buildStatItem('3', 'Internships'),
                _buildStatItem('5+', 'Certifications'),
                Expanded(
                  child: Container(
                    padding: EdgeInsets.all(16),
                    margin: EdgeInsets.only(left: 24),
                    decoration: BoxDecoration(
                      border: Border(
                        left: BorderSide(
                          color: Color(0xFF06B6D4),
                          width: 2,
                        ),
                      ),
                    ),
                    child: Text(
                      'Building the future with AI/ML innovation',
                      style: TextStyle(
                        fontWeight: FontWeight.w600,
                        color: _isDark ? Colors.white : Colors.grey[900],
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildButton(String text, bool isPrimary) {
    return ElevatedButton(
      onPressed: () {},
      style: ElevatedButton.styleFrom(
        backgroundColor: isPrimary 
          ? Color(0xFF06B6D4)
          : Colors.transparent,
        foregroundColor: isPrimary 
          ? Colors.white
          : (_isDark ? Colors.white : Colors.grey[900]),
        side: isPrimary 
          ? null
          : BorderSide(color: Colors.grey),
        padding: EdgeInsets.symmetric(horizontal: 24, vertical: 12),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(50),
        ),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (isPrimary) Icon(Icons.download, size: 16),
          if (isPrimary) SizedBox(width: 8),
          Text(text),
        ],
      ),
    );
  }

  Widget _buildSocialIcon(IconData icon) {
    return Container(
      padding: EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.1),
        borderRadius: BorderRadius.circular(8),
        border: Border.all(
          color: Colors.grey.withOpacity(0.2),
        ),
      ),
      child: Icon(
        icon,
        color: _isDark ? Colors.white : Colors.grey[700],
        size: 20,
      ),
    );
  }

  Widget _buildStatItem(String number, String label) {
    return Column(
      children: [
        Text(
          number,
          style: TextStyle(
            fontSize: 40,
            fontWeight: FontWeight.bold,
            color: Color(0xFF06B6D4),
          ),
        ),
        Text(
          label,
          style: TextStyle(
            color: _isDark ? Colors.grey[400] : Colors.grey[600],
          ),
        ),
      ],
    );
  }
}

void main() {
  runApp(MaterialApp(
    home: HeroPage(),
    debugShowCheckedModeBanner: false,
  ));
}