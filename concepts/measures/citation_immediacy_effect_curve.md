# Citation immediacy effect curve

## Summary

Citation immediacy effect curve measures how much more often recent papers are cited than expected from the background growth of the literature.

## Canonical Form

- Unit of analysis: cited-paper age bin, citing year, citation-index snapshot, field, or publication cohort.
- Typical representation: recent-excess age curve, multiplicative citation-rate ratio, or age-specific immediacy residual.
- Measurement target: the strength and duration of recent-paper citation concentration.
- Empirical signature: recent cited papers receive several times the background citation rate, with the excess declining as papers age.

## Uses in Science of Science

- Refines [research-front citation share](research_front_citation_share.md) by preserving the shape of the recent-paper excess rather than only a scalar share.
- Uses [growth-normalized citation-age baseline](../methods/growth_normalized_citation_age_baseline.md) to distinguish immediacy from archive growth.
- Connects [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md), [citation window selection](../methods/citation_window_selection.md), and modern [citation immediacy parameter](citation_immediacy_parameter.md) models.
- Helps compare fields where current fronts cite very recent work with fields that rely more heavily on older classics.

## Operationalization

- Estimate a background citation-age baseline from older cited years or a fitted growth model.
- Divide observed citations to each recent age bin by the expected baseline rate.
- Plot the ratio by cited-paper age and summarize peak excess, decay rate, and recent-window mass.
- Pair the curve with [historical publication-shock citation-age caveat](../validations/historical_publication_shock_citation_age_caveat.md) before fitting growth or recent-excess parameters.
- Compare field-specific curves before choosing citation windows for evaluation or prediction.

## Evidence and Validations

- Verified full-text evidence from Price (1965) defines the immediacy factor as the bunching or more frequent citation of recent papers relative to earlier papers.
- Price estimates that recent papers are initially cited about six times the background rate, with the excess declining as cited papers age.
- The paper states that the excess falls to roughly a factor of three after about seven years and to roughly a factor of two after about ten years.
- Price interprets the recent excess as a signature of active research-front citation rather than only literature growth.
- The same analysis suggests that a substantial portion of references point to recent-front literature.

## Caveats

- Immediacy curves are field- and database-specific.
- Recent excess can be inflated by online-first practices, review bursts, database expansion, or changing publication volume.
- A high immediacy effect does not imply that older literature is irrelevant; it measures current citation concentration.

## Links

- [research-front citation share](research_front_citation_share.md)
- [growth-normalized citation-age baseline](../methods/growth_normalized_citation_age_baseline.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation multiplicity-age gradient](citation_multiplicity_age_gradient.md)
- [citation immediacy parameter](citation_immediacy_parameter.md)
- [classic/ephemeral literature split](../mechanisms/classic_ephemeral_literature_split.md)
- [historical publication-shock citation-age caveat](../validations/historical_publication_shock_citation_age_caveat.md)
- [citation window selection](../methods/citation_window_selection.md)
- [paper attention half-life](paper_attention_half_life.md)

## References

- Price, D. J. de Solla. (1965). Networks of scientific papers. *Science*, 149(3683), 510-515. https://doi.org/10.1126/science.149.3683.510 [OpenAlex: W2088209891; Dimensions: pub.1062485810; WoS: unknown]

## Metadata

- Concept ID: `citation_immediacy_effect_curve`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Price (1965) (1965)
- Latest seen paper: Price (1965) (1965)
- Primary reference DOI: `10.1126/science.149.3683.510`
- OpenAlex ID: `W2088209891`
- Dimensions ID: `pub.1062485810`
- SciSciNet ID: `W2088209891`
- Aliases: immediacy effect; recent-citation excess curve; citation recency boost; age-specific immediacy ratio
