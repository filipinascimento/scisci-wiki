# Citation half-life impact scaling

## Summary

Citation half-life impact scaling measures how the duration of citation attention changes with total citation impact, usually through a power-law relation between citation half-life and cumulative citations.

## Canonical Form

- Unit of analysis: paper, field, citation-impact bin, citation half-life, or cumulative citation count.
- Typical representation: scaling relation `tau_1/2 ~ c_p^Omega`.
- Measurement target: whether highly cited papers sustain attention longer than less cited papers and whether that relation differs by field.
- Empirical signature: different fields show different scaling exponents linking citation volume to citation-attention duration.

## Uses in Science of Science

- Extends [citation life-cycle half-life](citation_life_cycle_half_life.md) from a duration measure to a duration-impact scaling law.
- Helps interpret [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md) as a field-specific diffusion process.
- Complements fitted [citation longevity parameters](citation_longevity_parameter.md) and raw [citation impact indicators](citation_impact_indicators.md).
- Provides a bridge to [publication-volume-rescaled half-life](publication_volume_rescaled_half_life.md), where half-life is adjusted for field growth.

## Operationalization

- Estimate each paper's citation half-life after the peak citation rate.
- Bin papers by cumulative citations, often with logarithmically spaced citation bins.
- Fit or summarize the relation between half-life and total citations within each field.
- Compare the scaling exponent or functional shape across disciplines.
- Interpret sublinear scaling as evidence that higher-impact papers accumulate extra citations over less than proportionally longer attention windows.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) relates the half-life `tau_1/2` to total citations `c_p` after estimating citation life-cycle curves.
- The paper reports an approximate scaling relation `tau_1/2 ~ c_p^Omega` and interprets `Omega` as an approximate relation between citations and time.
- Petersen et al. find that mathematics is close to proportional scaling, while biology shows sublinear scaling around `Omega` of 0.30 for the compared publications.
- The authors interpret these differences as linked to discipline-dependent diffusion and obsolescence rates.

## Caveats

- The scaling is descriptive unless paired with a model for field growth, paper fitness, and citation supply.
- Estimates depend on how uncited years, delayed peaks, and right-censoring are handled.
- Total citations and half-life are not independent because both are calculated from the same trajectory.

## Links

- [citation life-cycle half-life](citation_life_cycle_half_life.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation longevity parameter](citation_longevity_parameter.md)
- [citation impact indicators](citation_impact_indicators.md)
- [publication-volume-rescaled half-life](publication_volume_rescaled_half_life.md)
- [paper attention half-life](paper_attention_half_life.md)
- [peak-normalized citation trajectory aggregation](../methods/peak_normalized_citation_trajectory_aggregation.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `citation_half_life_impact_scaling`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: half-life impact scaling; tau citation scaling; impact-duration scaling; Omega half-life relation
