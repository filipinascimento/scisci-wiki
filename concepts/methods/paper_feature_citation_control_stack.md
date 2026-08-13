# Paper-feature citation control stack

## Summary

Paper-feature citation control stack is a reusable set of article-level controls used in citation and citation-delay models.

## Canonical Form

- Unit of analysis: paper, citation model, delay model, or journal-year sample.
- Typical controls: number of authors, number of pages, number of references, country count, international coauthorship, and field or journal fixed effects.
- Method target: separate focal bibliometric effects from article-size, collaboration, and reference-list confounds.
- Empirical signature: focal coefficients are interpreted conditional on common paper features.

## Uses in Science of Science

- Complements [journal fixed-effect citation model](journal_fixed_effect_citation_model.md).
- Supports studies of [citation speed-delay measure](../measures/citation_speed_delay_measure.md).
- Provides an article-level counterpart to field and venue normalization.
- Helps evaluate interdisciplinarity results under [responsible metrics](../measures/responsible_metrics.md).

## Operationalization

- Assemble paper-level covariates before estimating citation outcomes.
- Transform skewed counts where appropriate.
- Include journal or field fixed effects when comparing within publication venues.
- Report whether controls are used for citation counts, citation timing, or both.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) controls for authors, pages, references, country count, and international collaboration in journal fixed-effect citation models.
- The paper uses these controls when estimating both citation count and citation-delay outcomes.
- Results for the controls themselves show that collaboration, authorship, references, and article length can carry separate citation and timing information.

## Caveats

- Controls can absorb meaningful mechanisms if they lie on the causal path.
- Article features are often correlated with field, team size, funding, and journal type.
- Control stacks should not be copied without checking the study's estimand.

## Links

- [journal fixed-effect citation model](journal_fixed_effect_citation_model.md)
- [citation speed-delay measure](../measures/citation_speed_delay_measure.md)
- [citation window selection](citation_window_selection.md)
- [interdisciplinarity factor decomposition](interdisciplinarity_factor_decomposition.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; SciSciNet: W363554780; WoS: unknown]

## Metadata

- Concept ID: `paper_feature_citation_control_stack`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: paper-level citation controls; article-feature control stack; citation model article controls
