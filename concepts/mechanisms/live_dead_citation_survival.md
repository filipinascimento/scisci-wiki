# Live/dead citation survival

## Summary

Live/dead citation survival is the mechanism that papers can leave active citation circulation, while papers that remain "live" retain a recurring probability of being cited in future years.

## Canonical Form

- Unit of analysis: paper, citation year, citation survival state, field, or citation-history cohort.
- Typical representation: live/dead state model, annual death probability, citation survival curve, or probability of future citation.
- Mechanism: papers decay out of active use unless they remain part of the live archive or front.
- Empirical signature: a paper not cited in one year may later be cited, but a population-level model can include paper death and live-paper citation probability.

## Uses in Science of Science

- Gives [citation aging and obsolescence](citation_aging_obsolescence.md) a simple survival-process interpretation.
- Refines [uncited-paper mass](../measures/uncited_paper_mass.md) by separating temporarily uncited papers from papers that have likely left active citation flows.
- Connects to [annual citation-incidence distribution](../measures/annual_citation_incidence_distribution.md) and [classic/ephemeral literature split](classic_ephemeral_literature_split.md).
- Helps distinguish lower-tail forgetting from [sleeping beauty](sleeping_beauty.md) or delayed-recognition trajectories.

## Operationalization

- Build annual citation histories for a paper cohort.
- Estimate the probability that a paper receives at least one citation in each year conditional on prior state.
- Compare models with absorbing death, temporary dormancy, and delayed-awakening states.
- Report field and document-type differences in death probability and live-paper citation hazard.
- Use longer citation windows before classifying papers as dead rather than dormant.

## Evidence and Validations

- Verified full-text evidence from Price (1965) proposes a simple conjecture: some share of papers "die" each year and are not cited again.
- Price also conjectures that, among live papers, there is a recurring probability of receiving at least one citation in a given year.
- The paper uses this survival-style reasoning to explain why papers can be uncited in one year but cited later, while population-level citation incidence still shows regularity.
- Price links the survival process to finite active lifetime, suggesting that the major citation work of many papers may be finished after decades.

## Caveats

- The Price model is a conjectural early survival framing, not a fitted modern hazard model.
- Papers can re-enter attention through delayed recognition, reviews, methods reuse, or rediscovery.
- Citation death is field-, database-, and window-dependent and should not be equated with knowledge irrelevance.

## Links

- [citation aging and obsolescence](citation_aging_obsolescence.md)
- [annual citation-incidence distribution](../measures/annual_citation_incidence_distribution.md)
- [uncited-paper mass](../measures/uncited_paper_mass.md)
- [classic/ephemeral literature split](classic_ephemeral_literature_split.md)
- [low-citation short lifetime](low_citation_short_lifetime.md)
- [sleeping beauty](sleeping_beauty.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [citation longevity parameter](../measures/citation_longevity_parameter.md)

## References

- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; WoS: unknown]

## Metadata

- Concept ID: `live_dead_citation_survival`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Price (1965) (1965)
- Primary reference DOI: `10.1126/science.149.3683.510`
- OpenAlex ID: `W2088209891`
- Dimensions ID: `pub.1062485810`
- SciSciNet ID: `W2088209891`
- Aliases: citation death model; live-paper citation probability; paper citation survival; citation mortality
