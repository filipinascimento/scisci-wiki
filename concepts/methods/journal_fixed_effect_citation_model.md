# Journal fixed-effect citation model

## Summary

A journal fixed-effect citation model estimates citation outcomes by comparing papers within the same journal, controlling for journal-level field, audience, and reputation differences.

## Canonical Form

- Unit of analysis: paper, journal, publication cohort, citation count, or citation-delay score.
- Typical representation: fixed-effect Poisson model for citation counts or fixed-effect least-squares model for continuous delay scores.
- Method target: within-journal association between paper attributes and citation outcomes.
- Empirical signature: coefficients are interpreted among papers sharing the same journal fixed effect.

## Uses in Science of Science

- Reduces confounding from journal reputation, field scope, and topic audience when modeling [citation impact indicators](../measures/citation_impact_indicators.md).
- Supports tests of [interdisciplinarity](../mechanisms/interdisciplinarity.md) where field and journal placement are tightly entangled.
- Pairs naturally with [citation window selection](citation_window_selection.md) when short-term and long-term outcomes are modeled separately.
- Provides a reusable template for evaluating citation consequences within publication venues.

## Operationalization

- Choose a publication cohort with journal identifiers and citation outcomes.
- Include journal fixed effects so comparisons are made among papers in the same journal.
- Use fixed-effect Poisson models with robust clustered standard errors for overdispersed citation counts when the conditional mean is the modeling target.
- Use fixed-effect least-squares models for approximately continuous outcomes such as citation-delay scores.
- Include paper-level controls such as author count, international coauthorship, pages, and reference count when available.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) uses journal fixed effects to control for fine-grained topic heterogeneity and journal reputation effects.
- Their citation-count models use fixed-effect Poisson regressions with robust standard errors clustered at journals.
- The paper explicitly frames the estimates as within-journal effects among papers published in the same journal.
- Wang et al. also fit fixed-effect least-squares models for citation delay and robustness checks with alternative delay measures and alternative field classifications.

## Caveats

- Journal fixed effects do not remove within-journal topic, article-type, author-status, or editorial-selection confounding.
- Conditioning on journal can control away part of the mechanism if journal placement is itself an outcome of interdisciplinarity.
- Citation-count model choice, clustering level, and overdispersion assumptions should be reported.

## Links

- [citation impact indicators](../measures/citation_impact_indicators.md)
- [citation speed-delay measure](../measures/citation_speed_delay_measure.md)
- [citation window selection](citation_window_selection.md)
- [interdisciplinarity](../mechanisms/interdisciplinarity.md)
- [interdisciplinarity factor decomposition](interdisciplinarity_factor_decomposition.md)
- [WoS 2001 interdisciplinarity article panel](../datasets/wos_2001_interdisciplinarity_article_panel.md)
- [field classifications](../measures/field_classifications.md)
- [interdisciplinarity citation-window reversal](../validations/interdisciplinarity_citation_window_reversal.md)
- [nonlinear interdisciplinarity impact gradients](../validations/nonlinear_interdisciplinarity_impact_gradients.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `journal_fixed_effect_citation_model`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: within-journal citation model; journal fixed-effects Poisson; venue fixed-effect citation regression; xtpoisson journal fixed effects
