let selected_answer = 0;


const essay = {
    1: ["I will do so because I believe in the principles of Tolerance and Liberty. I believe that the State should not use the force of the law to impose the moral views of one group of citizens on another. I also believe that every autonomous individual (an adult of sound mind) should have their Liberty respected unless the exercise by them of their Liberty causes harm to others. I believe that the Liberty of an autonomous individual should include the right to seek assistance to die with dignity at a time of their own choosing. Finally, I believe that any legal restriction on the Liberty of an autonomous individual must be justified by compelling reasons to prevent harm to others and must be proportionate – being no greater a restriction than is necessary to prevent harm to others. If these principles are accepted and applied to the current law, I think it becomes clear why the law should be reformed."],
    2: ["I believe that it is compassionate and reasonable to allow patients who are terminally ill to choose to end their life painlessly and with dignity, at a time of their own choosing, rather than to face the prospect of an inevitable, painful and frightening death at some later point in the near future.\n" +
    "Parliament has already decriminalised suicide by s1 of the Suicide Act 1961 but patients in a situation like that of Diane Pretty require assistance to commit suicide. Diane Pretty wanted her husband to assist her suicide if necessary when the time came but was worried that he would face prosecution and be sent to prison for the offence of assisting suicide under s2(1) of the Suicide Act 1961. She wrote to the Director of Public Prosecutions, asking him to confirm that he would not prosecute her husband if he assisted her suicide. The DPP refused to give any guarantee in advance and both the House of Lords and the European Court of Human Rights rejected her claim that her human rights had been violated by his refusal – the right to life not extending to include a right to death.\n" +
    "Diane Pretty died in May 2002 when her disease had reached an advanced stage. \n" +
    "\n" +
    "Further reasons why the Law should be reformed - The current Law is neither fair nor effective\n" +
    "Another patient, Ms B , also wanted to end her life at about the same time as Diane Pretty. She was not terminally ill but she was completely and incurably paralysed as the result of an accident. She required artificial ventilation in order to breathe and eventually decided that she no longer wanted to remain alive. She requested her medical team to switch off the ventilator and, at first, they refused. Ms B made a legal challenge to their refusal and the Court of Appeal confirmed that an adult patient of sound mind can refuse treatment, even if the consequence is death.\n" +
    "As a result, Ms B was able to die with dignity at a time of her own choosing whereas Diane Pretty was not.\n"],
    3: ["The recent case of Debbie Purdy shows that the law is not effective in achieving its intended goal of preventing assistance for suicide. Debbie Purdy suffers from Multiple Sclerosis, another incurable degenerative disease of the nerves. She was considering travelling to the Dignitas Clinic in Switzerland, where assisting suicide is legal, so that she could end her life with dignity when she was ready. She wrote to the DPP asking if her husband would be considered to have assisted her suicide if he travelled with her. The DPP refused to answer in advance and she challenged his refusal in the courts. Eventually the House of Lords decided that the DPP should publish guidelines on when a prosecution for assisting suicide will be made. The DPP has now published guidelines which make it clear that a relative travelling to Switzerland with a person seeking assistance to commit suicide is unlikely to be prosecuted. The case illustrates that our laws tolerate terminally ill and severely disabled patients travelling to Switzerland but does not allow them to receive assistance to die at home.\n" +
    "Fears of a Slippery Slope\n" +
    "Having illustrated cases where terminally ill and severely disabled adult patients of sound mind might reasonably choose to end their lives and having rejected the right of the State to impose the moral views of one group on another, the only question that remains is whether allowing patients such as Diane Pretty and Debbie Purdy to receive the assistance they need to end their lives could cause such harm to others as to justify continuing the prohibition on assisting suicide.\n"],
    4: ["I reject this argument. I cannot see how a properly devised system of physician assisted suicide would threaten those who do not wish to end their lives. Because I believe that restrictions on the liberty of autonomous individuals must be justified, I believe that the onus lies on those who oppose legalising PAS to make a compelling argument that to do so would lead to greater harm to others. Raising the possibility of harm to others is insufficient; a clear case must be made out. \n" +
    "In any event, physician assisted suicide is already available, a few hours cheap travel away, in Switzerland. I am happy to discuss further safeguards to ensure that only genuine, well thought through, well counselled and voluntary requests are acted upon and that only physicians acting from the highest motives of patient care carry out those requests for assistance, but I do not accept that legalisation of PAS will put us on the top of a slippery slope leading to murder or an unravelling of society’s respect for the right to life.\n"],
    5: ["As we have seen, there are cases where an adult patient of sound mind might reasonably seek assistance to end their life. I have argued that the moral views of one group should not be imposed on another group by the State using the force of the law and this applies to suicide and assisting suicide. In any event, physician assisted suicide is available in Switzerland for UK citizens who choose it. I have argued that compassion and respect for the autonomy of the individual requires us to legalise physician assisted suicide unless a compelling case of harm to others can be made out and I suggest that a properly constructed law permitting physician assisted suicide will not create a slippery slope, it will not create any new or greater danger than exists at present to the right to life. \n" +
    "Furthermore, the Supreme Court in the recent case of Nicklinson  invited Parliament to reconsider the absolute ban on assisting suicide as there is a real prospect that the ban may be incompatible with the European Convention on Human Rights. For these reasons, I believe that s2 of the Suicide Act should be amended to make an exception for doctors acting in good faith to assist terminally ill patients of sound mind who have expressed a wish to die with dignity at a time of their own choosing.\n"]
}

const answers = {
    1: {
        1: ["In this essay I will argue the law is mesed up.","Choose again: too informal and poor grammar", false],
        2: ["In this essay, I will argue that the law should be reformed to allow physician assisted suicide, subject to appropriate safeguards.", "Good: clear and precise and good grammar", true],
        3: ["In this essay, I will argue the law is completely wrong", "Choose again: this is vague, it does not say why the law is wrong", false],
        4: ["In this essay, I argue that euthanasia should be legalised", "Choose again: legally, assisted suicide and euthanasia are different things", false]
    },
    2: {
        1: ["The Diane Pretty case illustrates why help to die is necessary in certain extreme cases.", "Choose again: help to die is imprecise + does not explain the case + no case reference", false],
        2: ["The Diane Pretty case illustrates why physician assisted suicide is necessary in certain extreme cases", "Choose again: no case reference and no explanation of the case", false],
        3: ["The case of Diane Pretty v Director of Public prosecutions [2001] illustrates why physician assisted suicide is necessary because Diane Pretty suffered from Motor Neurone Disease she feared the prospect of dying by suffocation when she couldnt breathe no more.", "Choose again: case reference is incomplete and poor grammar and spelling", false],
        4: ["The case of Diane Pretty v Director of Public prosecutions [2001] UKHL 61 illustrates why PAS is necessary in certain extreme cases. Diane Pretty suffered from Motor Neurone Disease, a degenerative disease that slowly destroys the nerve cells in the brain and the spinal cord. Already having to rely on a wheelchair and round the clock care from her husband and nursing staff, Diane Pretty feared the prospect of dying by suffocation when the disease reached the point where she could no longer breathe.", "Good: full case reference, full explanation of the case and correct grammar and spelling", true]
    },
    3: {
        1: ["Both cases are the same thing.", "Choose again: simply asserts an argument but does not give reasons to justify the conclusion", false],
        2: ["I believe both cases are morally the same, switching off the ventilator on request is moraly is the same as assisiting suicide.", "Choose again: the conclusion is not fully explained and there are spelling mistakes", false],
        3: ["I do not believe that categorising switching off a ventilator as a cessation of treatment is enough to justify the difference in the way the two patients were treated. Both were severely disabled, both wanted to die with dignity at a time of their own choosing and both needed assistance to do so. The fact that one needed to ask for a ventilator to be switched off and the other needed to ask for assistance in committing suicide should not make a difference to how the law respects and protects their autonomy. I do not accept that the distinction between acts and omissions is relevant to end of life decisions made by autonomous individuals.", "Good: fully reasoned and justified + good grammar and spelling", true],
        4: ["Switching off a ventillator as a cesation of treatment is not enough to justify the difference in the way the two patients were treated, both were severely disabled, both wanted to die with dignity at a time of their own choosing and both needed assistance to do so, the fact that one needed to ask for a ventilator to be switched off and the other needed to ask for assistance in committing suicide should not make a difference to how the law respects and protects their autonmy.", "Choose again: very long sentence and spelling mistakes + argument is asserted rather than justified fully by reasons", false]
    },
    4: {
        1: ["Legalsing assisted suidice will not cause harm to anyone else, it will not cause no slippery slope.", "Choose again: spelling mistakes and no supporting argument", false],
        2: ["This is known as a slippery slope argument. It means that allowing Diane Pretty and Debbie Purdy death with dignity might lead to others being killed against their wishes or being put under pressure to end their lives.", "Choose again: death with dignity is imprecise and could include euthanasia as well as assisted suicide", false],
        3: ["This is known as a slippery slope argument. It means that allowing doctors to assist the suicide of Diane Pretty and Debbie Purdy might lead to others being killed against their wishes or being put under pressure to end their lives.", "Good: clear and good grammar and spelling", true],
        4: ["When one thing might lead to another this is known a slippery slope and it means you might slip from the place you want to be to a place you don’t want to be, in this case from physician assisted suicide to medical serial killers like Dr Shipman or families bullying their elderly relatives to request assisted suicide because they don’t want to care for them anymore.", "Choose again: this is a very long sentence and requires appropriate punctuation", false]
    },
    5: {
        1: ["As we have seen, there are cases where an adult patient of sound mind might reasonably seek assistance to end their life. I have argued that the moral views of one group should not be imposed on another group by the State using the force of the law and this applies to suicide and assisting suicide. In any event, physician assisted suicide is available in Switzerland for UK citizens who choose it. I have argued that compassion and respect for the autonomy of the individual requires us to legalise physician assisted suicide unless a compelling case of harm to others can be made out and I suggest that a properly constructed law permitting physician assisted suicide will not create a slippery slope, it will not create any new or greater danger than exists at present to the right to life. ", "Good: ", true],
        2: ["As we have seen there are cases where an adult patient of sound mind might reasonably seek assistance to end their life and I have argued that the moral views of one group should not be imposed on another group by the State using the force of the law and this applies to suicide and assisting suicide.", "Choose again: summarise full argument + requires punctuation", false],
        3: ["As we have seen, there are cases where an adult pateint of sound mind might reasonably seek asistance to end their life. I have argued that the moral views of one group should not be imposed on another group by the State using the force of the law and this applies to suicide and asisting suicide. In any event, physician assisted suicide is aviailable in Switzerland for UK citizens who choose it. I have argued that compassion and respect for the autonomy of the individual requires us to legalise physician assisted suicide unless a compelling case of harm to others can be made out and I suggest that a properly constructed law permitting physician assisted suicide will not create a slippery slope.", "Choose again: poor spelling", false],
        4: ["As we have seen there are cases where an adult patent of sound mind might reasonably seek asistance to end their life and I have argued that the moral views of one group should not be imposed on another group by the State using the force of the law and this applies to suicide and asisting suicide especially as physician asisted suicide is available in Switzerland for UK citizens who choose it and I have argued that compassion and respect for the autonomy of the individual requires us to legalise physician asisted suicide unless a compelling case of harm to others can be made out and I suggest that a properly constructed law permitting physician assisted suicide will not create a slippery slope and will not create any new or greater danger than exists at present to the right to life.", "Choose again: incorrect spelling and requires punctuation", false]
    }
}

function completeEssay() {
    const section = document.getElementById("section-title");
    const essay = document.getElementById("essay");
    const question_header = document.getElementById("questions-header");
    const question_list = document.getElementById("questions-list");
    const divider = document.getElementById("essay-divider");

    question_header.hidden = true;
    question_list.hidden = true;
    divider.hidden = true;

    section.innerText = "Complete Essay";
    essay.innerText = "At present, it is a criminal offence under S2 of the Suicide Act, 1961 to assist someone in committing suicide, even though committing suicide itself is no longer an offence as a result of S1 of the Suicide Act 1961. This applies to doctors as much as anyone else and it doesn’t matter if they act from the highest motives of compassion, they are still guilty of an offence. In this essay, I will argue that the law should be reformed to allow physician assisted suicide, subject to appropriate safeguards. I will do so because I believe in the principles of Tolerance and Liberty. I believe that the State should not use the force of the law to impose the moral views of one group of citizens on another. I also believe that every autonomous individual (an adult of sound mind) should have their Liberty respected unless the exercise by them of their Liberty causes harm to others. I believe that the Liberty of an autonomous individual should include the right to seek assistance to die with dignity at a time of their own choosing. Finally, I believe that any legal restriction on the Liberty of an autonomous individual must be justified by compelling reasons to prevent harm to others and must be proportionate – being no greater a restriction than is necessary to prevent harm to others. If these principles are accepted and applied to the current law, I think it becomes clear why the law should be reformed. The case of Diane Pretty v Director of Public prosecutions [2001] UKHL 61 illustrates why PAS is necessary in certain extreme cases. Diane Pretty suffered from Motor Neurone Disease, a degenerative disease that slowly destroys the nerve cells in the brain and the spinal cord. Already having to rely on a wheelchair and round the clock care from her husband and nursing staff, Diane Pretty feared the prospect of dying by suffocation when the disease reached the point where she could no longer breathe. I believe that it is compassionate and reasonable to allow patients who are terminally ill to choose to end their life painlessly and with dignity, at a time of their own choosing, rather than to face the prospect of an inevitable, painful and frightening death at some later point in the near future.\n" +
        "Parliament has already decriminalised suicide by s1 of the Suicide Act 1961 but patients in a situation like that of Diane Pretty require assistance to commit suicide. Diane Pretty wanted her husband to assist her suicide if necessary when the time came but was worried that he would face prosecution and be sent to prison for the offence of assisting suicide under s2(1) of the Suicide Act 1961. She wrote to the Director of Public Prosecutions, asking him to confirm that he would not prosecute her husband if he assisted her suicide. The DPP refused to give any guarantee in advance and both the House of Lords and the European Court of Human Rights rejected her claim that her human rights had been violated by his refusal – the right to life not extending to include a right to death.\n" +
        "Diane Pretty died in May 2002 when her disease had reached an advanced stage. \n" +
        "\n" +
        "Further reasons why the Law should be reformed - The current Law is neither fair nor effective\n" +
        "Another patient, Ms B , also wanted to end her life at about the same time as Diane Pretty. She was not terminally ill but she was completely and incurably paralysed as the result of an accident. She required artificial ventilation in order to breathe and eventually decided that she no longer wanted to remain alive. She requested her medical team to switch off the ventilator and, at first, they refused. Ms B made a legal challenge to their refusal and the Court of Appeal confirmed that an adult patient of sound mind can refuse treatment, even if the consequence is death.\n" +
        "\n" +
        "As a result, Ms B was able to die with dignity at a time of her own choosing whereas Diane Pretty was not. I do not believe that categorising switching off a ventilator as a cessation of treatment is enough to justify the difference in the way the two patients were treated. Both were severely disabled, both wanted to die with dignity at a time of their own choosing and both needed assistance to do so. The fact that one needed to ask for a ventilator to be switched off and the other needed to ask for assistance in committing suicide should not make a difference to how the law respects and protects their autonomy. I do not accept that the distinction between acts and omissions is relevant to end of life decisions made by autonomous individuals.\n" +
        "\n" +
        "The recent case of Debbie Purdy shows that the law is not effective in achieving its intended goal of preventing assistance for suicide. Debbie Purdy suffers from Multiple Sclerosis, another incurable degenerative disease of the nerves. She was considering travelling to the Dignitas Clinic in Switzerland, where assisting suicide is legal, so that she could end her life with dignity when she was ready. She wrote to the DPP asking if her husband would be considered to have assisted her suicide if he travelled with her. The DPP refused to answer in advance and she challenged his refusal in the courts. Eventually the House of Lords decided that the DPP should publish guidelines on when a prosecution for assisting suicide will be made. The DPP has now published guidelines which make it clear that a relative travelling to Switzerland with a person seeking assistance to commit suicide is unlikely to be prosecuted. The case illustrates that our laws tolerate terminally ill and severely disabled patients travelling to Switzerland but does not allow them to receive assistance to die at home.\n" +
        "Fears of a Slippery Slope\n" +
        "Having illustrated cases where terminally ill and severely disabled adult patients of sound mind might reasonably choose to end their lives and having rejected the right of the State to impose the moral views of one group on another, the only question that remains is whether allowing patients such as Diane Pretty and Debbie Purdy to receive the assistance they need to end their lives could cause such harm to others as to justify continuing the prohibition on assisting suicide. This is known as a slippery slope argument. It means that allowing doctors to assist the suicide of Diane Pretty and Debbie Purdy might lead to others being killed against their wishes or being put under pressure to end their lives.\n" +
        "\n" +
        "I reject this argument. I cannot see how a properly devised system of physician assisted suicide would threaten those who do not wish to end their lives. Because I believe that restrictions on the liberty of autonomous individuals must be justified, I believe that the onus lies on those who oppose legalising PAS to make a compelling argument that to do so would lead to greater harm to others. Raising the possibility of harm to others is insufficient; a clear case must be made out. \n" +
        "In any event, physician assisted suicide is already available, a few hours cheap travel away, in Switzerland. I am happy to discuss further safeguards to ensure that only genuine, well thought through, well counselled and voluntary requests are acted upon and that only physicians acting from the highest motives of patient care carry out those requests for assistance, but I do not accept that legalisation of PAS will put us on the top of a slippery slope leading to murder or an unravelling of society’s respect for the right to life.\n" +
        "\n" +
        "As we have seen, there are cases where an adult patient of sound mind might reasonably seek assistance to end their life. I have argued that the moral views of one group should not be imposed on another group by the State using the force of the law and this applies to suicide and assisting suicide. In any event, physician assisted suicide is available in Switzerland for UK citizens who choose it. I have argued that compassion and respect for the autonomy of the individual requires us to legalise physician assisted suicide unless a compelling case of harm to others can be made out and I suggest that a properly constructed law permitting physician assisted suicide will not create a slippery slope, it will not create any new or greater danger than exists at present to the right to life. \n" +
        "\n" +
        "Furthermore, the Supreme Court in the recent case of Nicklinson  invited Parliament to reconsider the absolute ban on assisting suicide as there is a real prospect that the ban may be incompatible with the European Convention on Human Rights. For these reasons, I believe that s2 of the Suicide Act should be amended to make an exception for doctors acting in good faith to assist terminally ill patients of sound mind who have expressed a wish to die with dignity at a time of their own choosing.\n"
}

function changeEssay() {
    const section = document.getElementById("section-title");
    const essay_part = document.getElementById("essay-part");
    let essay_part_no = parseInt(essay_part.innerText);

    if (essay_part_no === 2) {
        section.innerText = "Why is Physician Assisted Suicide necessary?";
    }
    if (essay_part_no === 3) {
        section.innerText = "Further reasons why the Law should be reformed - The current Law is neither fair nor effective";
    }
    if (essay_part_no === 4) {
        section.innerText = "Fears of a Slippery Slope";
    }
    if (essay_part_no === 5) {
        section.innerText = "Conclusion";
        completeEssay();
    }

    const option_1 = document.getElementById("choice-1");
    const option_2 = document.getElementById("choice-2");
    const option_3 = document.getElementById("choice-3");
    const option_4 = document.getElementById("choice-4");

    option_1.innerText = answers[essay_part_no + 1][1][0];
    option_2.innerText = answers[essay_part_no + 1][2][0];
    option_3.innerText = answers[essay_part_no + 1][3][0];
    option_4.innerText = answers[essay_part_no + 1][4][0];

    essay_part_no = essay_part_no + 1;
    const new_essay = document.getElementById("essay");
    new_essay.innerText = essay[essay_part.innerText][0];

    essay_part.innerText = essay_part_no.toString();
    selected_answer = 0;
}

function checkSelection() {
    const essay_part = document.getElementById("essay-part");
    const essay_part_no = parseInt(essay_part.innerText);

    const option_1 = document.getElementById("choice-1");
    const option_2 = document.getElementById("choice-2");
    const option_3 = document.getElementById("choice-3");
    const option_4 = document.getElementById("choice-4");

    if (selected_answer === 1) {
        if (answers[essay_part_no][1][2]) {
            option_1.innerText = answers[essay_part_no][1][1];
            option_1.setAttribute("style", "color: green!important");

            setTimeout(function () {
                option_1.setAttribute("style", "color: #333333!important");
                option_2.setAttribute("style", "color: #333333!important");
                option_3.setAttribute("style", "color: #333333!important");
                option_4.setAttribute("style", "color: #333333!important");

                changeEssay();
            }, 2500);
        }
        else {
            option_1.innerText = answers[essay_part_no][1][1];
            option_1.setAttribute("style", "color: red!important");
        }
    }
    if (selected_answer === 2) {
        if (answers[essay_part_no][2][2]) {
            option_2.innerText = answers[essay_part_no][2][1];
            option_2.setAttribute("style", "color: green!important");

            setTimeout(function () {
                option_1.setAttribute("style", "color: #333333!important");
                option_2.setAttribute("style", "color: #333333!important");
                option_3.setAttribute("style", "color: #333333!important");
                option_4.setAttribute("style", "color: #333333!important");

                changeEssay();
            }, 2500);
        }
        else {
            option_2.innerText = answers[essay_part_no][2][1];
            option_2.setAttribute("style", "color: red!important");
        }
    }
    if (selected_answer === 3) {
        if (answers[essay_part_no][3][2]) {
            option_3.innerText = answers[essay_part_no][3][1];
            option_3.setAttribute("style", "color: green!important");

            setTimeout(function () {
                option_1.setAttribute("style", "color: #333333!important");
                option_2.setAttribute("style", "color: #333333!important");
                option_3.setAttribute("style", "color: #333333!important");
                option_4.setAttribute("style", "color: #333333!important");

                changeEssay();
            }, 2500);
        }
        else {
            option_3.innerText = answers[essay_part_no][3][1];
            option_3.setAttribute("style", "color: red!important");
        }
    }

    if (selected_answer === 4) {
        if (answers[essay_part_no][4][2]) {
            option_4.innerText = answers[essay_part_no][4][1];
            option_4.setAttribute("style", "color: green!important");

            setTimeout(function () {
                option_1.setAttribute("style", "color: #333333!important");
                option_2.setAttribute("style", "color: #333333!important");
                option_3.setAttribute("style", "color: #333333!important");
                option_4.setAttribute("style", "color: #333333!important");

                changeEssay();
            }, 2500);
        }
        else {
            option_4.innerText = answers[essay_part_no][4][1];
            option_4.setAttribute("style", "color: red!important");
        }
    }
}