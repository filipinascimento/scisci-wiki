# Field citation tempo profile

## Summary

Field citation tempo profile plots citations from a fixed citing year to cited years by field to reveal how quickly citations mature before choosing a citation window.

## Canonical Form

- Unit of analysis: field, citing year, cited year, citation age, journal set, or metric window.
- Typical representation: citation-age distribution, cited-year profile, field tempo curve, or two-year versus five-year coverage comparison.
- Representation target: expose field differences in citation maturation and decay.
- Empirical signature: fields differ in whether citations concentrate near publication or remain important after longer lags.

## Uses in Science of Science

- Provides the visual evidence behind [Eigenfactor citation-window lag sensitivity](../validations/eigenfactor_citation_window_lag_sensitivity.md).
- Connects metric design to [citation window selection](../methods/citation_window_selection.md), [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md), and [citation-age backfile retention](../methods/citation_age_backfile_retention.md).
- Helps compare fast-moving and slow-moving fields before applying journal, paper, or grant impact windows.

## Operationalization

- Choose a fixed citing year and assign citing journals or papers to fields.
- Count citations by age or cited publication year within each field.
- Plot normalized citation shares across cited years so field tempo can be compared.
- Use the profile to evaluate whether short, medium, or long citation windows fit the evaluation target.
- Preserve database coverage and backfile depth because old citation capture affects the tail of the profile.

## Evidence and Validations

- Verified full-text evidence from West, Bergstrom, and Bergstrom (2010) compares citation timing across fields when discussing why Eigenfactor uses a five-year window.
- The paper contrasts fields where citations peak near a short window with fields where citations mature more slowly, showing that a two-year impact-factor window can favor faster citation tempos.
- This representation generalizes the Eigenfactor example into a field-level diagnostic for citation-window choice.

## Caveats

- Field profiles depend on classification systems, journal assignment, and the chosen citing year.
- Older cited-year counts require reliable backfile coverage.
- Citation tempo is not equivalent to quality, usefulness, or social impact.

## Links

- [Eigenfactor citation-window lag sensitivity](../validations/eigenfactor_citation_window_lag_sensitivity.md)
- [citation window selection](../methods/citation_window_selection.md)
- [citation aging obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation-age backfile retention](../methods/citation_age_backfile_retention.md)
- [journal metric divergence decomposition](../methods/journal_metric_divergence_decomposition.md)
- [Article Influence versus impact-factor divergence](../validations/article_influence_impact_factor_divergence.md)

## References

- West, J. D., Bergstrom, T. C., & Bergstrom, C. T. (2010). The Eigenfactor Metrics: A Network Approach to Assessing Scholarly Journals. *College & Research Libraries*, 71(3), 236-244. https://doi.org/10.5860/0710236 [OpenAlex: W1993001003; Dimensions: pub.1002494331; SciSciNet: W1993001003; WoS: unknown]

## Metadata

- Concept ID: `field_citation_tempo_profile`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: West et al. (2010) (2010)
- Latest seen paper: West et al. (2010) (2010)
- Primary reference DOI: `10.5860/0710236`
- OpenAlex ID: `W1993001003`
- Dimensions ID: `pub.1002494331`
- SciSciNet ID: `W1993001003`
- Aliases: field citation-age profile; citation tempo curve; cited-year field profile; citation maturation profile
