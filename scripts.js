// ─────────────────────────────────────────────────────────────────
// OC DIALER — CALL SCRIPTS
// Add new scripts by appending objects to the SCRIPTS array.
// Each script needs: id, name, sections[], objections[], voicemail, doNotSay[]
// ─────────────────────────────────────────────────────────────────

const SCRIPTS = [
  {
    id: 'landscaping-cold-call-v1',
    name: 'Landscaping Cold Call v1',
    sections: [
      {
        id: 'opener',
        title: '1. Opener — Pattern Interrupt',
        duration: '5 sec',
        script: 'Hey, is this [NAME]?\n\n[Wait for yes]\n\nHey [NAME], this is Morgan with MDS — quick heads up, this is a cold call. You wanna hang up, or give me 30 seconds?',
        notes: 'Honesty disarms them. 80% give you the 30 seconds. Say it casual, not robotic.',
      },
      {
        id: 'reason',
        title: '2. Reason for Calling',
        duration: '15 sec',
        script: 'Appreciate it. Real quick — I help landscaping companies in [CITY] get more jobs through their website and Google. I was looking at [BUSINESS NAME] and [SPECIFIC OBSERVATION]. That\'s actually why I called.',
        hooks: [
          { trigger: 'No website',        line: 'noticed you don\'t have a website yet — most of your competitors do' },
          { trigger: 'Outdated site',     line: 'saw your site looked like it hadn\'t been updated in a while' },
          { trigger: 'Hidden on Google',  line: 'saw [COMPETITOR] ranking above you for [SERVICE] in [CITY]' },
          { trigger: 'No reviews',        line: 'noticed you\'ve got great work but only a handful of Google reviews' },
        ],
        notes: 'Specific = you did homework. Pick ONE hook based on what you see on their profile. Replace [SPECIFIC OBSERVATION] with the hook line.',
      },
      {
        id: 'pain-hook',
        title: '3. Pain Hook',
        duration: '10 sec',
        script: 'Quick question — are you guys getting most of your jobs from referrals right now, or do you have something actually bringing in new leads consistently?\n\n[Listen — most say "mostly referrals"]\n\nYeah, that\'s what I figured. That\'s exactly what we fix.',
        notes: 'Almost every landscaper says referrals. This sets up the close. Don\'t fill the silence — let them answer.',
      },
      {
        id: 'close',
        title: '4. The Close — Book the Call',
        duration: '15 sec',
        script: 'Look, I\'m not gonna pitch you over the phone. What I do is build a quick custom mockup of what your new site could look like — free, no commitment — and walk you through how it\'d bring in jobs. Takes about 20 minutes.\n\nYou free Thursday at 2, or does Friday morning work better?',
        notes: 'Two options only. Don\'t ask "are you interested." Don\'t say "whenever works for you." Assume the booking.',
      },
    ],
    objections: [
      {
        objection: 'I\'m busy / not interested',
        response: 'Totally get it. If I sent you the mockup first so you could just look at it, would that be easier?',
      },
      {
        objection: 'Send me an email',
        response: 'Yeah, I can do that — what\'s stopping you from just looking at it together for 15 min so I can actually walk you through it?',
      },
      {
        objection: 'I already have a website / guy',
        response: 'Cool, how\'s it performing for you? Bringing in jobs? [90% say no or not really — then book the call]',
      },
      {
        objection: 'How much does it cost?',
        response: 'Depends what you actually need — that\'s what the call\'s for. Worst case you get a free mockup out of it. Thursday or Friday?',
      },
      {
        objection: 'I don\'t do business over the phone',
        response: 'Fair. That\'s why I\'m just trying to book a Zoom — face to face, 20 minutes. Thursday work?',
      },
      {
        objection: 'Call me back later',
        response: 'Yeah no problem — when\'s actually a good time? I\'ll lock it in my calendar right now so I\'m not bugging you.',
      },
      {
        objection: 'I\'m in the middle of something',
        response: 'No worries — I\'ll keep it to 30 seconds or we can lock in a quick call later today. Which works?',
      },
      {
        objection: 'Who is this? / Where\'d you get my number?',
        response: 'Totally fair question. I found [BUSINESS NAME] through Google searching landscapers in [CITY]. Public listing — I\'m not selling lists or anything, just reaching out direct.',
      },
      {
        objection: 'I can\'t afford it',
        response: 'Got it — totally fair. Can I ask, is it that cash is tight right now, or you\'re not sure marketing would even pay off? Two different conversations.',
      },
      {
        objection: 'I\'ll think about it',
        response: 'Sure. What specifically do you need to think through? I can probably answer it right now and save you the back and forth.',
      },
      {
        objection: 'We get all our work from referrals',
        response: 'That\'s awesome — and honestly that\'s what every landscaper says right before they hit a slow month. This is just a backup that runs on autopilot. 20 minutes — Thursday or Friday?',
      },
      {
        objection: 'I\'m not looking to grow right now',
        response: 'No worries at all. Can I ask what\'s keeping you from wanting more jobs — is it capacity or something else?',
      },
    ],
    voicemail: 'Hey [NAME], Morgan with MDS — I work with landscaping companies in [AREA] and had a quick idea for [BUSINESS NAME]. Not a sales pitch, just wanted to run something by you. Call me back at [YOUR NUMBER] or shoot me a text. Thanks.',
    doNotSay: [
      '"How are you today?"',
      'Pitch the offer on the first call',
      'Discuss pricing',
      'Explain web design or ads in detail',
      'Read robotically',
      '"Is now a good time?"',
    ],
  },

  // ── FUTURE SCRIPTS — add below this line ──────────────────────
  // {
  //   id: 'follow-up-v1',
  //   name: 'Follow-Up Call v1',
  //   sections: [...],
  //   objections: [...],
  //   voicemail: '...',
  //   doNotSay: [...],
  // },
];
