# Low-citation short lifetime

## Summary

Low-citation short lifetime is the mechanism by which minimally cited papers receive early local attention, often from authors and close associates, and then quickly disappear from active citation flows.

## Canonical Form

- Unit of analysis: minimally cited paper, low-citation tail, publication cohort, field, or citation age profile.
- Typical representation: low-citation tail stability, early-window citation count, citation-life curve, or lower-tail cohort comparison.
- Mechanism: papers with little early uptake are usually cited by local networks and then forgotten, unlike highly cited papers that continue to diffuse through collective attention.
- Empirical signature: normalized low-citation tails look similar across early and late cohorts, while high-citation tails differ strongly by age.

## Uses in Science of Science

- Adds a mechanism to [uncited-paper mass](../measures/uncited_paper_mass.md) beyond the zero-count statistic.
- Refines [citation aging and obsolescence](citation_aging_obsolescence.md) for the lower tail of citation distributions.
- Connects [attention inequality](attention_inequality.md) to different processes for minimally cited and highly cited papers.
- Helps separate not-yet-cited recent papers from papers that have already left active attention.

## Operationalization

- Define low-citation thresholds such as zero, <=1, <=5, <=10, or <=200 citations depending on corpus scale.
- Compare normalized lower-tail distributions across publication cohorts with different exposure times.
- Estimate early citation-life curves and the probability of later escape from the low-citation state.
- Pair lower-tail profiles with [citation cohort-age contrast](../validations/citation_cohort_age_contrast.md) and [citation threshold profile](../measures/citation_threshold_profile.md).
- Distinguish lower-tail forgetting from delayed recognition or sleeping-beauty trajectories.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) states that minimally cited papers are typically referenced by authors and close associates and are often forgotten shortly after publication.
- Redner compares early and late Physical Review D cohorts and reports that, for lower citation counts, normalized distributions are virtually identical to the complete PRD data.
- The same paper contrasts this with highly cited papers, whose tails differ strongly by cohort age because influential papers continue accumulating attention over long periods.
- This supports treating lower-tail citation dynamics separately from high-citation tail maturation.

## Caveats

- Low citation does not imply low quality, nonuse, or absence of social value.
- Some delayed-recognition papers begin in the lower tail and later awaken.
- The low-citation threshold depends on field, database, document type, and citation window.

## Links

- [uncited-paper mass](../measures/uncited_paper_mass.md)
- [citation threshold profile](../measures/citation_threshold_profile.md)
- [citation cohort-age contrast](../validations/citation_cohort_age_contrast.md)
- [citation memory-reinforcement model](citation_memory_reinforcement_model.md)
- [citation aging obsolescence](citation_aging_obsolescence.md)
- [attention inequality](attention_inequality.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [sleeping beauty](sleeping_beauty.md)
- [sleeping-beauty detection](../methods/sleeping_beauty_detection.md)
- [citation tail maturation bias](../validations/citation_tail_maturation_bias.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; WoS: unknown]

## Metadata

- Concept ID: `low_citation_short_lifetime`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Aliases: minimally cited short lifetime; low-attention forgetting; lower-tail citation aging; short-lived citation attention
