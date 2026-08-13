# Fixed ten-year career-impact outcome

## Summary

Treats paper impact in career models as citations accumulated exactly ten years after publication, making each paper comparable on a fixed exposure horizon.

## Canonical Form

- Unit of analysis: author-paper row, citation window, or career-impact model.
- Typical representation: `c10` citation outcome attached to each paper with enough publication age.
- Mechanism, measurement, or validation target: fixed-horizon paper impact inside career models.
- Empirical signature: each eligible paper receives a ten-year citation outcome rather than a variable-age total..

## Uses in Science of Science

- Operationalizes impact for [scientific career impact dynamics](../mechanisms/scientific_career_impact.md).
- Connects career prediction to [citation window selection](../methods/citation_window_selection.md).
- Provides the outcome layer for highest-impact sequence and Q-model analyses.

## Operationalization

- Attach `c10` to each author-paper row and require enough publication age.
- Normalize by field and year when the source requires it.
- Run sensitivity to longer windows for delayed-impact domains.

## Evidence and Validations

- Verified full-text evidence from Sinatra et al. (2016) defines `c10` and uses citations accumulated ten years after publication as the career-impact outcome.
- The paper also describes source-specific normalization choices around this outcome.

## Caveats

- Ten years still misses very delayed impact.
- The horizon excludes recent papers and can select older cohorts.

## Links

- [Citation window selection](../methods/citation_window_selection.md)
- [Citation impact indicators](citation_impact_indicators.md)
- [Field-normalized citation impact](field_normalized_citation_impact.md)
- [Highest-impact sequence position](highest_impact_sequence_position.md)
- [APS-WoS career impact panel](../datasets/aps_wos_career_impact_panel.md)

## References

- Sinatra, R., Wang, D., Deville, P., Song, C., & Barabasi, A.-L. (2016). Quantifying the evolution of individual scientific impact. *Science*, 354(6312), aaf5239. https://doi.org/10.1126/science.aaf5239 [OpenAlex: W2547045893; Dimensions: pub.1044965176; WoS: unknown]

## Metadata

- Concept ID: `fixed_ten_year_career_impact_outcome`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Sinatra et al. (2016) (2016)
- Latest seen paper: Sinatra et al. (2016) (2016)
- Primary reference DOI: `10.1126/science.aaf5239`
- OpenAlex ID: `W2547045893`
- Dimensions ID: `pub.1044965176`
- SciSciNet ID: `W2547045893`
- Aliases: c10 career impact; ten-year citation outcome; fixed-horizon career impact
