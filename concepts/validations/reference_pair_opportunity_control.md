# Reference-pair opportunity control

## Summary

Longer reference lists mechanically create more possible journal pairs and more opportunities to observe novelty.

## Canonical Form

- Unit of analysis: paper reference list, possible journal pair, novelty score, or regression model.
- Typical representation: reference-count or possible-pair covariate/offset in novelty models.
- Mechanism, measurement, or validation target: mechanical opportunity bias in observing new journal-pair novelty.
- Empirical signature: novelty effects are robust after accounting for reference count or possible pair opportunities..

## Uses in Science of Science

- Adds an opportunity denominator to [new journal-pair novelty](../measures/new_journal_pair_novelty.md).
- Connects novelty eligibility to [reference set construction](../methods/reference_set_construction.md).
- Useful for separating breadth of referencing from novelty per opportunity.

## Operationalization

- Include log references, unique cited journals, or possible journal-pair counts as covariates or offsets.
- Test novelty scores normalized by pair opportunities.
- Report whether controls overadjust substantive exploratory breadth.

## Evidence and Validations

- Verified full-text evidence from Wang et al. (2017) controls for reference count and requires at least two WoS-journal references for eligibility.
- This makes reference-pair opportunity a validation concern.

## Caveats

- Reference breadth is partly substantive exploratory behavior, so controls can overadjust.
- Reference-list length grows over time and varies by field and document type.

## Links

- [Novelty-measure eligibility denominator](novelty_measure_eligibility_denominator.md)
- [New journal-pair novelty](../measures/new_journal_pair_novelty.md)
- [Reference set construction](../methods/reference_set_construction.md)
- [Reference-list length growth confound](reference_list_length_growth_confound.md)
- [Citation-count pathway confound](citation_count_pathway_confound.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `reference_pair_opportunity_control`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: reference-pair opportunity denominator; novelty pair opportunity control; reference-count novelty control
