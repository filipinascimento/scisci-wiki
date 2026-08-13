# Category disparity

## Summary

Category disparity measures how different, distant, or dissimilar the represented categories are from one another.

## Canonical Form

- Unit of analysis: category pair, paper, reference list, portfolio, field, map overlay, or technology mix.
- Typical representation: pairwise distance matrix, average dissimilarity, map distance, taxonomy distance, or cosine dissimilarity.
- Mechanism or measurement target: cognitive, technological, or structural distance among combined knowledge sources.
- Empirical signature: disparity increases when the same number of categories span more distant regions of a classification, map, or similarity network.

## Uses in Science of Science

- Distinguishes nearby multidisciplinarity from distant knowledge recombination.
- Provides the distance component of [Rao-Stirling diversity](rao_stirling_diversity.md).
- Links [interdisciplinarity](../mechanisms/interdisciplinarity.md), [novelty and conventionality](../mechanisms/novelty_conventionality.md), [science maps](../representations/science_maps.md), and research-strategy risk.

## Operationalization

- Choose a category system and construct a pairwise distance or dissimilarity matrix.
- Common sources include co-citation similarities, citation flows, text similarity, expert taxonomies, or science-map coordinates.
- Compute average pairwise dissimilarity or a share-weighted disparity measure.
- Report the distance definition because disparity values are not meaningful without it.

## Evidence and Validations

- Verified full-text evidence from Stirling (2007) defines disparity as the manner and degree in which represented elements can be distinguished.
- Porter and Rafols (2009) incorporate dissimilarity between Web of Science subject categories into their Integration score and use science maps to show whether cited categories are neighboring or distant.
- Wang, Thijs, and Glanzel (2015) operationalize average dissimilarity between referenced subject categories as a disparity indicator, using one minus cosine similarity from a co-citation matrix.
- Wang et al. find that long-term citations increase with disparity at a decreasing rate, while high disparity is associated with citation delay in short windows.
- Their impact models imply diminishing marginal returns to disparity over the observed range, and their short-window models show that high-disparity papers can be underestimated early.

## Caveats

- Disparity is only as valid as the distance matrix or map geometry used to define it.
- High disparity can mean creative recombination, but it can also mean incoherent mixing or poor fit with evaluators.
- Distances are often field- and period-specific; snapshot versioning matters for longitudinal studies.

## Links

- [diversity measures](diversity_measures.md)
- [interdisciplinarity dimensions](interdisciplinarity_dimensions.md)
- [category variety](category_variety.md)
- [distributional balance](distributional_balance.md)
- [Rao-Stirling diversity](rao_stirling_diversity.md)
- [average subject-category dissimilarity](average_subject_category_dissimilarity.md)
- [perspective-dependent disparity space](../representations/perspective_dependent_disparity_space.md)
- [diversity proxy-substitution risk](../validations/diversity_proxy_substitution_risk.md)
- [science maps](../representations/science_maps.md)
- [WoS subject-category co-citation matrix](../representations/wos_subject_category_cocitation_matrix.md)
- [novelty and conventionality](../mechanisms/novelty_conventionality.md)
- [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md)
- [nonlinear interdisciplinarity impact gradients](../validations/nonlinear_interdisciplinarity_impact_gradients.md)
- [interdisciplinarity citation-window reversal](../validations/interdisciplinarity_citation_window_reversal.md)

## References

- Stirling, A. (2007). A general framework for analysing diversity in science, technology and society. *Journal of the Royal Society Interface*, 4(15), 707-719. https://doi.org/10.1098/rsif.2007.0213 [OpenAlex: W2110158660; Dimensions: pub.1011912474; WoS: unknown]
- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; WoS: unknown]
- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; WoS: unknown]

## Metadata

- Concept ID: `category_disparity`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Stirling (2007) (2007)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1098/rsif.2007.0213`
- OpenAlex ID: `W2110158660`
- Aliases: cognitive distance; subject-category dissimilarity; disciplinary distance; knowledge-source disparity
