# Citation supply deflator

## Summary

Citation supply deflator adjusts citation trajectories for growth in the number of papers that can supply citations in a field or discipline over time.

## Canonical Form

- Unit of analysis: paper-year, author-year, discipline-year, citation trajectory, or career cohort.
- Typical representation: citation increments divided by field publication output D(t) or a related citation-opportunity denominator.
- Method target: distinguish individual or paper-level growth from the expanding baseline volume of science.
- Empirical signature: after deflation, growth exponents or citation rates shrink but may remain above the baseline growth of the field.

## Uses in Science of Science

- Provides a temporal normalization step for [career growth exponents](../measures/career_growth_exponents.md) and [cumulative author reputation](../measures/cumulative_author_reputation.md).
- Complements [field-normalized citation impact](../measures/field_normalized_citation_impact.md) by controlling for growth in citation supply across years.
- Helps evaluate whether observed citation growth reflects author reputation, field expansion, citation inflation, or a mixture.
- Supplies a guardrail for longitudinal [citation impact indicators](../measures/citation_impact_indicators.md).

## Operationalization

- Define a field or discipline denominator D(t), commonly the number of publications in that field-year.
- Divide annual paper citation increments by D(t) before accumulating deflated citation trajectories.
- Fit growth exponents or citation-rate models on both raw and deflated trajectories.
- Report the field definition, database snapshot, document types, and whether references per paper changed over time.
- Prefer recent, versioned sources such as [Dimensions](../datasets/dimensions.md) or [OpenAlex](../datasets/openalex.md) when updating contemporary denominators.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) defines deflated citation increments by dividing each annual citation increment by the number of publications in the corresponding discipline-year.
- The paper reports roughly 5 percent exponential growth in discipline publication output over the previous half century.
- After applying the deflator, Petersen et al. find that estimated citation growth exponents are reduced by about 15 percent but remain strongly superlinear.
- The paper uses this result to argue that highly cited scientists' career citation growth is not explained solely by the expanding publication baseline.

## Caveats

- Publication counts are only one proxy for citation supply; reference-list length, database coverage, and document-type mix can also change.
- Field-year denominators depend on classification schemes and database snapshots.
- Deflating citations can remove broad growth trends but not author, journal, institution, or topic-specific reputation effects.

## Links

- [career growth exponents](../measures/career_growth_exponents.md)
- [cumulative author reputation](../measures/cumulative_author_reputation.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [relative citation performance c_f](../measures/relative_citation_performance_cf.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [publication-rate normalized rank](../measures/publication_rate_normalized_rank.md)
- [reference set construction](reference_set_construction.md)
- [citation window selection](citation_window_selection.md)
- [Dimensions](../datasets/dimensions.md)
- [OpenAlex](../datasets/openalex.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `citation_supply_deflator`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: citation deflator index; publication-growth citation deflator; discipline publication deflator; citation inflation control
