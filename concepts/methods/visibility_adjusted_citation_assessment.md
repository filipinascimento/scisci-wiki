# Visibility-adjusted citation assessment

## Summary

Visibility-adjusted citation assessment compares researchers or papers after accounting for visibility advantages such as institution prestige, elite coauthors, venue placement, and early network access.

## Canonical Form

- Unit of analysis: scientist, paper, institution, career window, visibility covariate, or adjusted impact residual.
- Typical representation: citation residual, matched comparison, counterfactual expected citations, or wins-above-replacement-style career metric.
- Method target: separate citation attention associated with visible positions from impact relative to peers with similar visibility conditions.
- Empirical signature: citation outcomes are interpreted against a visibility baseline rather than as raw counts alone.

## Uses in Science of Science

- Turns [responsible metrics](../measures/responsible_metrics.md) concerns about prestige and status into an operational assessment design.
- Extends [citation impact indicators](../measures/citation_impact_indicators.md) by treating visibility as a covariate or matching dimension.
- Uses evidence from [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md), [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md), and [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md).

## Operationalization

- Define the citation outcome and the population of comparable researchers or papers.
- Measure visibility factors such as institution prestige, venue prestige, prior reputation, top-coauthor exposure, field, career age, and collaboration network position.
- Fit expected-impact models or construct matched comparison sets conditioned on those visibility factors.
- Report raw impact together with visibility-adjusted residuals or expected-versus-observed differences.
- Validate the adjustment against held-out outcomes, field-specific expectations, and fairness or gaming risks.

## Evidence and Validations

- Verified full-text evidence from Li et al. (2019) argues that citations are driven by multiple factors, including social ones, making it difficult to assess intrinsic merit from citation counts alone.
- The paper suggests developing more nuanced bibliometric indicators, including analogues to wins-above-replacement metrics and visibility-adjusted citation counts that compare scientists with similar career trajectories.
- Li et al.'s empirical evidence supplies concrete visibility covariates for such an adjustment: institutional prestige, top-scientist coauthorship, early productivity, early citations, and later elite-network access.
- The proposal is a suggested assessment design, not a finished validated indicator in the paper.

## Caveats

- Visibility adjustment can remove effects of structural advantage, but it can also obscure genuine contributions made through high-visibility collaborations.
- The choice of visibility covariates is normative and can affect incentives.
- Residualized metrics require uncertainty intervals and should support qualitative assessment rather than replace it.

## Links

- [responsible metrics](../measures/responsible_metrics.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md)
- [Nature Index institutional prestige score](../measures/nature_index_institutional_prestige_score.md)
- [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)
- [top scientist selection confound](../validations/top_scientist_selection_confound.md)
- [non-top-coauthored impact persistence](../validations/non_top_coauthored_impact_persistence.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)

## References

- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; WoS: unknown]

## Metadata

- Concept ID: `visibility_adjusted_citation_assessment`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Li et al. (2019) (2019)
- Latest seen paper: Li et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-13130-4`
- OpenAlex ID: `W2949684159`
- Dimensions ID: `pub.1122584827`
- SciSciNet ID: `W2949684159`
- Aliases: visibility-adjusted citations; wins-above-replacement bibliometrics; prestige-adjusted impact assessment; visibility residual impact
