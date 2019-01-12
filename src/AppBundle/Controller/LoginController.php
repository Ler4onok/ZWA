<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class LoginController extends Controller
{
    /**
     * @Route("/login", name="login")
     */
    public function loginAction(Request $request, AuthenticationUtils $utils)
    {

        $errors = $utils->getLastAuthenticationError();

        $lastUserName = $utils->getLastUsername(); 

        return $this->render('AppBundle:Login:login.html.twig', array(
            'errors' => $errors,
            'username' => $lastUserName
        ));
    }

    /**
     * @Route("/logout", name="logout")
     */
    public function logoutAction(){
        
    }
}
