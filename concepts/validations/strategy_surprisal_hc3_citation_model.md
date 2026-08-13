# Strategy-surprisal HC3 citation model

## Summary

Strategy-surprisal HC3 citation model validates the relationship between rare research strategies and citation outcomes with heteroscedasticity-robust regressions on strategy-year citation means and dispersions.

## Canonical Form

- Unit of analysis: strategy-year cell, article with a strategy instance, citation window, regression observation, or citation-dispersion outcome.
- Typical representation: surprisal coefficient, HC3 robust standard error, year-control model, mean-citation regression, or citation-standard-deviation regression.
- Validation target: whether [research strategy surprisal](../measures/research_strategy_surprisal.md) predicts higher mean impact and more variable impact after basic temporal controls.
- Empirical signature: surprisal remains significant when year is included and heteroscedasticity is handled.

## Uses in Science of Science

- Provides the regression validation behind the citation side of [research strategy surprisal](../measures/research_strategy_surprisal.md).
- Connects risky strategy rarity to [risky-strategy citation variance](../measures/risky_strategy_citation_variance.md).
- Supplies a method template for testing novelty, interdisciplinarity, team structure, or disruption measures against citation outcomes under heteroscedastic errors.
- Complements [risk-neutral strategy success threshold](risk_neutral_strategy_success_threshold.md), which uses citation means for a reward-bound calculation.

## Operationalization

- Compute strategy surprisal for each strategy-year cell from a fitted choice model.
- Link articles to citation records and assign a fixed citation window.
- For each strategy-year cell, compute mean citations and citation standard deviation for articles containing that strategy.
- Regress the citation outcome on strategy surprisal, optionally including publication year.
- Use HC3 or another robust correction when residual variance increases with surprisal or citation level.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) links MEDLINE abstracts to Thomson Reuters citation records and assigns three-year citation counts.
- The paper restricts the citation analysis to 1983-2002 because citation coverage declines after 2005 and about two-thirds of MEDLINE articles link to a citation record.
- Foster et al. regress mean citations and citation standard deviations on strategy surprisal and use the HC3 heteroscedasticity correction.
- The same full text reports that surprisal significantly predicts mean citations and citation dispersion, and that combined models with year retain a significant surprisal coefficient.

## Caveats

- Citation-linked MEDLINE articles are a selected subset of the full annotation corpus.
- Three-year citations favor fields and strategies with faster recognition.
- Robust standard errors do not address unobserved failed projects, publication selection, or omitted field-level confounders.

## Links

- [research strategy surprisal](../measures/research_strategy_surprisal.md)
- [risky-strategy citation variance](../measures/risky_strategy_citation_variance.md)
- [risk-neutral strategy success threshold](risk_neutral_strategy_success_threshold.md)
- [risky-strategy compensation test](risky_strategy_compensation_test.md)
- [strategy opportunity-bias model](../methods/strategy_opportunity_bias_model.md)
- [citation window selection](../methods/citation_window_selection.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]

## Metadata

- Concept ID: `strategy_surprisal_hc3_citation_model`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Foster et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: HC3 strategy citation regression; robust surprisal citation model; strategy-year citation regression; heteroscedasticity-corrected strategy impact
