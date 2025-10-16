import 'package:flutter/material.dart';
import 'dart:math' as math;

class AttractiveHeroPage extends StatefulWidget {
  @override
  _AttractiveHeroPageState createState() => _AttractiveHeroPageState();
}

class _AttractiveHeroPageState extends State<AttractiveHeroPage>
    with TickerProviderStateMixin {
  late AnimationController _floatingController;
  late AnimationController _rotationController;
  late AnimationController _pulseController;
  late AnimationController _textController;
  late Animation<double> _floatingAnimation;
  late Animation<double> _rotationAnimation;
  late Animation<double> _pulseAnimation;
  late Animation<double> _textAnimation;
  
  bool _isDark = true;

  @override
  void initState() {
    super.initState();
    
    _floatingController = AnimationController(
      duration: Duration(seconds: 3),
      vsync: this,
    )..repeat(reverse: true);
    
    _rotationController = AnimationController(
      duration: Duration(seconds: 20),
      vsync: this,
    )..repeat();
    
    _pulseController = AnimationController(
      duration: Duration(seconds: 2),
      vsync: this,
    )..repeat(reverse: true);
    
    _textController = AnimationController(
      duration: Duration(milliseconds: 1500),
      vsync: this,
    );
    
    _floatingAnimation = Tween<double>(begin: -10, end: 10).animate(
      CurvedAnimation(parent: _floatingController, curve: Curves.easeInOut),
    );
    
    _rotationAnimation = Tween<double>(begin: 0, end: 2 * math.pi).animate(
      CurvedAnimation(parent: _rotationController, curve: Curves.linear),
    );
    
    _pulseAnimation = Tween<double>(begin: 0.8, end: 1.2).animate(
      CurvedAnimation(parent: _pulseController, curve: Curves.easeInOut),
    );
    
    _textAnimation = Tween<double>(begin: 0, end: 1).animate(
      CurvedAnimation(parent: _textController, curve: Curves.elasticOut),
    );
    
    _textController.forward();
  }

  @override
  void dispose() {
    _floatingController.dispose();
    _rotationController.dispose();
    _pulseController.dispose();
    _textController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: RadialGradient(
            center: Alignment.topLeft,
            radius: 1.5,
            colors: _isDark
                ? [
                    Color(0xFF1a1a2e),
                    Color(0xFF16213e),
                    Color(0xFF0f3460),
                  ]
                : [
                    Color(0xFFe3f2fd),
                    Color(0xFFbbdefb),
                    Color(0xFF90caf9),
                  ],
          ),
        ),
        child: Stack(
          children: [
            // Animated Background Particles
            ...List.generate(20, (index) => _buildParticle(index)),
            
            // Floating Orbs
            _buildFloatingOrb(0.1, 0.2, Color(0xFF00d4ff), 80),
            _buildFloatingOrb(0.8, 0.3, Color(0xFFff006e), 60),
            _buildFloatingOrb(0.2, 0.8, Color(0xFF8338ec), 100),
            
            // Navigation
            _buildGlassNavigation(),
            
            // Main Content
            _buildMainContent(),
          ],
        ),
      ),
    );
  }

  Widget _buildParticle(int index) {
    return AnimatedBuilder(
      animation: _floatingController,
      builder: (context, child) {
        return Positioned(
          left: (index * 50.0) % MediaQuery.of(context).size.width,
          top: (index * 80.0) % MediaQuery.of(context).size.height,
          child: Transform.translate(
            offset: Offset(
              math.sin(_floatingAnimation.value + index) * 20,
              math.cos(_floatingAnimation.value + index) * 15,
            ),
            child: Container(
              width: 4,
              height: 4,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.cyan.withOpacity(0.6),
                boxShadow: [
                  BoxShadow(
                    color: Colors.cyan.withOpacity(0.3),
                    blurRadius: 10,
                    spreadRadius: 2,
                  ),
                ],
              ),
            ),
          ),
        );
      },
    );
  }

  Widget _buildFloatingOrb(double x, double y, Color color, double size) {
    return AnimatedBuilder(
      animation: _floatingController,
      builder: (context, child) {
        return Positioned(
          left: MediaQuery.of(context).size.width * x,
          top: MediaQuery.of(context).size.height * y,
          child: Transform.translate(
            offset: Offset(
              math.sin(_floatingAnimation.value) * 30,
              math.cos(_floatingAnimation.value) * 20,
            ),
            child: Container(
              width: size,
              height: size,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    color.withOpacity(0.3),
                    color.withOpacity(0.1),
                    Colors.transparent,
                  ],
                ),
              ),
            ),
          ),
        );
      },
    );
  }

  Widget _buildGlassNavigation() {
    return Positioned(
      top: 40,
      left: 20,
      right: 20,
      child: ScaleTransition(
        scale: _textAnimation,
        child: Container(
          padding: EdgeInsets.symmetric(horizontal: 24, vertical: 16),
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.1),
            borderRadius: BorderRadius.circular(30),
            border: Border.all(
              color: Colors.white.withOpacity(0.2),
              width: 1,
            ),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.1),
                blurRadius: 20,
                spreadRadius: 0,
              ),
            ],
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              ShaderMask(
                shaderCallback: (bounds) => LinearGradient(
                  colors: [Color(0xFF00d4ff), Color(0xFF8338ec)],
                ).createShader(bounds),
                child: Text(
                  'Pavan.dev',
                  style: TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
              ),
              Row(
                children: [
                  _buildGlassButton('About'),
                  SizedBox(width: 8),
                  _buildGlassButton('Work'),
                  SizedBox(width: 8),
                  _buildGlassButton('Contact'),
                  SizedBox(width: 16),
                  GestureDetector(
                    onTap: () => setState(() => _isDark = !_isDark),
                    child: AnimatedContainer(
                      duration: Duration(milliseconds: 300),
                      padding: EdgeInsets.all(8),
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: Colors.white.withOpacity(0.2),
                      ),
                      child: Icon(
                        _isDark ? Icons.light_mode : Icons.dark_mode,
                        color: Colors.white,
                        size: 20,
                      ),
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

  Widget _buildGlassButton(String text) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.1),
        borderRadius: BorderRadius.circular(20),
        border: Border.all(
          color: Colors.white.withOpacity(0.2),
        ),
      ),
      child: Text(
        text,
        style: TextStyle(
          color: Colors.white,
          fontWeight: FontWeight.w500,
        ),
      ),
    );
  }

  Widget _buildMainContent() {
    return Center(
      child: Padding(
        padding: EdgeInsets.symmetric(horizontal: 40),
        child: Row(
          children: [
            // Left Content
            Expanded(
              flex: 3,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SlideTransition(
                    position: Tween<Offset>(
                      begin: Offset(-1, 0),
                      end: Offset.zero,
                    ).animate(_textAnimation),
                    child: Text(
                      'Hello, I\'m',
                      style: TextStyle(
                        fontSize: 32,
                        color: Colors.white.withOpacity(0.8),
                        fontWeight: FontWeight.w300,
                      ),
                    ),
                  ),
                  SizedBox(height: 8),
                  SlideTransition(
                    position: Tween<Offset>(
                      begin: Offset(-1, 0),
                      end: Offset.zero,
                    ).animate(CurvedAnimation(
                      parent: _textController,
                      curve: Interval(0.2, 1.0, curve: Curves.elasticOut),
                    )),
                    child: ShaderMask(
                      shaderCallback: (bounds) => LinearGradient(
                        colors: [
                          Color(0xFF00d4ff),
                          Color(0xFF8338ec),
                          Color(0xFFff006e),
                        ],
                      ).createShader(bounds),
                      child: Text(
                        'Pavan Ayithireddy',
                        style: TextStyle(
                          fontSize: 64,
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                          height: 1.1,
                        ),
                      ),
                    ),
                  ),
                  SizedBox(height: 8),
                  SlideTransition(
                    position: Tween<Offset>(
                      begin: Offset(-1, 0),
                      end: Offset.zero,
                    ).animate(CurvedAnimation(
                      parent: _textController,
                      curve: Interval(0.4, 1.0, curve: Curves.elasticOut),
                    )),
                    child: Text(
                      'AI/ML Developer & Data Scientist',
                      style: TextStyle(
                        fontSize: 28,
                        color: Colors.white.withOpacity(0.9),
                        fontWeight: FontWeight.w400,
                      ),
                    ),
                  ),
                  SizedBox(height: 32),
                  SlideTransition(
                    position: Tween<Offset>(
                      begin: Offset(0, 1),
                      end: Offset.zero,
                    ).animate(CurvedAnimation(
                      parent: _textController,
                      curve: Interval(0.6, 1.0, curve: Curves.elasticOut),
                    )),
                    child: Text(
                      'Crafting intelligent solutions with cutting-edge AI/ML technologies.\nSpecializing in computer vision, NLP, and predictive analytics.',
                      style: TextStyle(
                        fontSize: 18,
                        color: Colors.white.withOpacity(0.7),
                        height: 1.6,
                      ),
                    ),
                  ),
                  SizedBox(height: 48),
                  SlideTransition(
                    position: Tween<Offset>(
                      begin: Offset(0, 1),
                      end: Offset.zero,
                    ).animate(CurvedAnimation(
                      parent: _textController,
                      curve: Interval(0.8, 1.0, curve: Curves.elasticOut),
                    )),
                    child: Row(
                      children: [
                        _buildGradientButton('View My Work', true),
                        SizedBox(width: 20),
                        _buildGradientButton('Get In Touch', false),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            
            SizedBox(width: 60),
            
            // Right Content - Animated Profile
            Expanded(
              flex: 2,
              child: ScaleTransition(
                scale: _textAnimation,
                child: _buildAnimatedProfile(),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildGradientButton(String text, bool isPrimary) {
    return AnimatedBuilder(
      animation: _pulseController,
      builder: (context, child) {
        return Transform.scale(
          scale: isPrimary ? _pulseAnimation.value : 1.0,
          child: Container(
            padding: EdgeInsets.symmetric(horizontal: 32, vertical: 16),
            decoration: BoxDecoration(
              gradient: isPrimary
                  ? LinearGradient(
                      colors: [Color(0xFF00d4ff), Color(0xFF8338ec)],
                    )
                  : null,
              color: isPrimary ? null : Colors.transparent,
              borderRadius: BorderRadius.circular(30),
              border: isPrimary
                  ? null
                  : Border.all(color: Colors.white.withOpacity(0.3), width: 2),
              boxShadow: isPrimary
                  ? [
                      BoxShadow(
                        color: Color(0xFF00d4ff).withOpacity(0.3),
                        blurRadius: 20,
                        spreadRadius: 0,
                      ),
                    ]
                  : null,
            ),
            child: Text(
              text,
              style: TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.w600,
                fontSize: 16,
              ),
            ),
          ),
        );
      },
    );
  }

  Widget _buildAnimatedProfile() {
    return AnimatedBuilder(
      animation: _rotationController,
      builder: (context, child) {
        return Stack(
          alignment: Alignment.center,
          children: [
            // Rotating Ring
            Transform.rotate(
              angle: _rotationAnimation.value,
              child: Container(
                width: 400,
                height: 400,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  gradient: SweepGradient(
                    colors: [
                      Color(0xFF00d4ff),
                      Color(0xFF8338ec),
                      Color(0xFFff006e),
                      Color(0xFF00d4ff),
                    ],
                  ),
                ),
                child: Container(
                  margin: EdgeInsets.all(4),
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: _isDark ? Color(0xFF1a1a2e) : Color(0xFFe3f2fd),
                  ),
                ),
              ),
            ),
            
            // Profile Container
            AnimatedBuilder(
              animation: _floatingController,
              builder: (context, child) {
                return Transform.translate(
                  offset: Offset(0, _floatingAnimation.value),
                  child: Container(
                    width: 320,
                    height: 320,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: RadialGradient(
                        colors: [
                          Color(0xFF00d4ff).withOpacity(0.2),
                          Color(0xFF8338ec).withOpacity(0.1),
                          Colors.transparent,
                        ],
                      ),
                      boxShadow: [
                        BoxShadow(
                          color: Color(0xFF00d4ff).withOpacity(0.3),
                          blurRadius: 50,
                          spreadRadius: 0,
                        ),
                      ],
                    ),
                    child: Center(
                      child: Icon(
                        Icons.person,
                        size: 150,
                        color: Colors.white.withOpacity(0.8),
                      ),
                    ),
                  ),
                );
              },
            ),
          ],
        );
      },
    );
  }
}

void main() {
  runApp(MaterialApp(
    home: AttractiveHeroPage(),
    debugShowCheckedModeBanner: false,
  ));
}