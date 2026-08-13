# Citation crossover threshold

## Summary

Citation crossover threshold marks the citation-count region where a paper's own citation history begins to dominate over author reputation in predicting future citation rates.

## Canonical Form

- Unit of analysis: paper, author-paper pair, discipline cohort, or publication portfolio.
- Typical representation: crossover citation count c_x separating a reputation regime from a paper-reputation regime.
- Measurement target: the transition from status-mediated early attention to paper-specific cumulative advantage.
- Empirical signature: below c_x, author reputation has a stronger association with annual citation increments; above c_x, prior paper citations follow near-linear preferential attachment.

## Uses in Science of Science

- Splits [reputation effects](../mechanisms/reputation_effects.md) into low-citation and high-citation regimes.
- Defines the range where [reputation citation premium](../mechanisms/reputation_citation_premium.md) is expected to be strongest.
- Provides a parameter for [reputation effect citation model](../methods/reputation_effect_citation_model.md).
- Links author-level [cumulative author reputation](cumulative_author_reputation.md) to paper-level [citation impact indicators](citation_impact_indicators.md).

## Operationalization

- For each discipline or cohort, group papers by cumulative citations at time t.
- Estimate the relationship between prior paper citations and next-year citation increments.
- Identify the citation-count region where the scaling changes from excess low-citation rates to near-linear preferential attachment.
- Estimate citation-rate models separately below and above the selected threshold.
- Test sensitivity to reasonable threshold choices and field-specific values.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) identifies a citation crossover c_x that distinguishes the strength of the author reputation effect.
- For publications below c_x, citation rates exceed what would be expected from linear preferential attachment alone, reflecting reputation-mediated citation premium.
- For publications above c_x, the paper reports approximate linear preferential attachment and negligible author reputation effect.
- Petersen et al. use field-specific values including c_x = 40 for the main physicist datasets, c_x = 10 for assistant professors in physics, c_x = 100 for cell biology, and c_x = 20 for mathematics.
- The paper reports that results are not strongly dependent on reasonable variations around the selected crossover values.

## Caveats

- Crossover values are field- and sample-dependent.
- Threshold selection is partly empirical and should be tested for sensitivity.
- C_x is not a universal quality boundary; it is a model regime boundary for citation dynamics.

## Links

- [reputation effects](../mechanisms/reputation_effects.md)
- [reputation citation premium](../mechanisms/reputation_citation_premium.md)
- [cumulative author reputation](cumulative_author_reputation.md)
- [reputation effect citation model](../methods/reputation_effect_citation_model.md)
- [citation impact indicators](citation_impact_indicators.md)
- [citation distribution scaling](citation_distribution_scaling.md)
- [cumulative advantage](../mechanisms/cumulative_advantage.md)
- [paper fitness](paper_fitness.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `citation_crossover_threshold`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: c_x; citation tipping point; reputation regime threshold; paper reputation crossover
