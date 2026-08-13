# Citation memory-reinforcement model

## Summary

Citation memory-reinforcement model combines short citation memory for most papers with reinforcement for papers that are becoming recognized.

## Canonical Form

- Unit of analysis: paper, citation event, publication age, prior citation count, or citation-rate model.
- Typical representation: time-decaying baseline citation probability plus increasing citation probability as prior citations accumulate.
- Mechanism: most papers are forgotten quickly, while already recognized papers gain attention through cumulative citation feedback.
- Empirical signature: low-citation papers show short-lived attention, but high-citation papers continue accruing citations over long windows.

## Uses in Science of Science

- Connects [low-citation short lifetime](low_citation_short_lifetime.md), [citation tail maturation bias](../validations/citation_tail_maturation_bias.md), and [cumulative advantage](cumulative_advantage.md).
- Provides a minimal theory ingredient list for modeling [citation distribution scaling](../measures/citation_distribution_scaling.md).
- Links citation aging to [preferential attachment](preferential_attachment.md), [citation pull mechanism](citation_pull_mechanism.md), and [paper fitness](../measures/paper_fitness.md).
- Helps explain why one final distributional fit may conceal different lower-tail and upper-tail dynamics.

## Operationalization

- Estimate a baseline citation hazard as a function of paper age.
- Estimate whether citation probability increases with prior citation count or recent citation rate.
- Compare low-citation and high-citation regimes rather than forcing one process over the full range.
- Simulate whether the combined memory and reinforcement terms reproduce threshold profiles, Zipf tails, and cohort-age contrasts.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) proposes qualitative features that should be included in a theory of citation distributions.
- The paper states that almost all papers are gradually forgotten and that citation probability should decrease in time with relatively short memory.
- Redner also argues that papers becoming recognized gain increasing attention through citations, implying that citation probability should increase with relative previous citations.
- This mechanism statement follows the empirical contrast between stable low-citation tails and still-evolving high-citation tails.

## Caveats

- The model ingredients are qualitative in Redner's paper; later work is needed for parameter estimation and causal identification.
- Prior citations can proxy quality, visibility, field size, team size, journal placement, or cumulative advantage.
- Memory and reinforcement can vary by field, document type, and database coverage.

## Links

- [low-citation short lifetime](low_citation_short_lifetime.md)
- [citation tail maturation bias](../validations/citation_tail_maturation_bias.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [cumulative advantage](cumulative_advantage.md)
- [preferential attachment](preferential_attachment.md)
- [citation pull mechanism](citation_pull_mechanism.md)
- [paper fitness](../measures/paper_fitness.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; WoS: unknown]

## Metadata

- Concept ID: `citation_memory_reinforcement_model`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: citation memory reinforcement; citation aging reinforcement model; forgotten-paper reinforcement model; citation hazard reinforcement
