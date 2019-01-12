<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Comment;
use AppBundle\Form\CommentType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class CommentController extends Controller
{

    /**
     * @Template()
     * @Route("/doctor/{forDoctor}", name="doctor_index")
     */
    public function indexAction(Request $request, $forDoctor)
    {
        $comments = $this->getDoctrine()
            ->getRepository(Comment::class)
            ->findBy([ 'forDoctor' => $forDoctor ]);

        $comment = new Comment($forDoctor);
        $form = $this->createForm(CommentType::class, $comment)
            ->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->persist($comment);
            $this->getDoctrine()->getManager()->flush();
            return $this->redirectToRoute('doctor_index', [ 'forDoctor' => $forDoctor ]);
        }

        return [
            'comments' => $comments,
            'form' => $form->createView()
        ];
    }

}
