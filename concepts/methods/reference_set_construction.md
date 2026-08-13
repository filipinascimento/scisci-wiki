# Reference set construction

## Summary

Reference set construction defines the papers against which a focal paper or portfolio is compared for normalized citation indicators.

## Canonical Form

- Unit of analysis: focal paper, paper cohort, author portfolio, institution, field, funder, or evaluation unit.
- Typical representation: field-year-document-type cell, paper-level cluster, co-citation neighborhood, bibliographic-coupling neighborhood, or benchmark group.
- Method target: build comparable baselines for citation normalization.
- Empirical signature: normalized scores change when the reference set changes.

## Uses in Science of Science

- Core infrastructure for [field normalized citation impact](../measures/field_normalized_citation_impact.md), [mean normalized citation score](../measures/mean_normalized_citation_score.md), and [citation percentile indicators](../measures/citation_percentile_indicators.md).
- Produces explicit expected-value baselines such as [field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md).
- Connects [field classifications](../measures/field_classifications.md), [science maps](../representations/science_maps.md), [bibliographic coupling](../representations/bibliographic_coupling.md), and [co citation](../representations/co_citation.md).
- Makes evaluation choices auditable under [responsible metrics](../measures/responsible_metrics.md).
- Supplies part of [field-specific indicator suites](field_specific_indicator_suites.md), because reference sets and output formats differ by discipline.

## Operationalization

- Choose a comparison rule, such as field, publication year, document type, journal set, topic cluster, co-citation field, or bibliographic-coupling neighborhood.
- Exclude incomparable document types or handle them with separate baselines.
- Apply [document-type citation filtering](document_type_citation_filtering.md) before computing expected citation baselines.
- Define the citation window and database snapshot used to count citations.
- Record enough versioning information that the same reference set can be reconstructed later.
- For WoS-based reference sets, document subject-category handling through [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md) and the citation-count "as of" date through [citation data census dates](citation_data_census_dates.md).
- Run [field-classification sensitivity](../validations/field_classification_sensitivity.md) when normalized indicators may depend on the taxonomy or aggregation level.

## Evidence and Validations

- Verified full-text evidence from Waltman (2016) shows that normalization requires explicit publication selection, citation selection, field definition, publication year, document type, and citation-window choices.
- Waltman reviews alternatives to fixed journal subject categories, including publication-level classification, bibliographic coupling, and relatedness-based normalization.
- Verified full-text evidence from Waltman and van Eck (2012) now anchors the publication-level classification alternative directly, showing how direct-citation clusters can provide paper-level reference-set strata instead of journal-level categories.
- Waltman also distinguishes cited-side reference-set normalization from [citing-side normalization](citing_side_normalization.md), which avoids fixed field classifications by using citing-source reference behavior.
- Verified full-text evidence from Hutchins et al. (2016) provides a dynamic reference-set design: each paper's co-citation network is used to estimate a field citation rate and expected citation rate.
- Hutchins et al. also separate field-definition choice from peer-benchmark choice: [co-citation network field definition](../representations/co_citation_network_field_definition.md) defines the local field, while [RCR benchmark calibration](rcr_benchmark_calibration.md) anchors the expected citation rate to a comparison cohort.
- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) shows why reference sets matter: raw citation distributions vary strongly by discipline, while field-year rescaling improves comparability.
- Radicchi et al. also make two reference-set caveats explicit: document-type filters matter, and broad multidisciplinary categories can behave as mixtures of narrower field distributions.
- Verified full-text evidence from Birkle et al. (2020) adds a WoS-specific reference-set caveat: Subject Categories were built for retrieval and can duplicate counts unless multi-category journals are adjusted.

## Caveats

- Reference sets encode field boundaries; they are not neutral technical details.
- Narrow reference sets can be noisy, while broad reference sets can mix incomparable papers.
- Interdisciplinary and emerging-field papers may not fit one stable comparison group.

## Links

- [field normalized citation impact](../measures/field_normalized_citation_impact.md)
- [mean normalized citation score](../measures/mean_normalized_citation_score.md)
- [field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [top-percentile publication share](../measures/top_percentile_publication_share.md)
- [cited-side normalization](cited_side_normalization.md)
- [citing-side normalization](citing_side_normalization.md)
- [field-classification sensitivity](../validations/field_classification_sensitivity.md)
- [document-type citation filtering](document_type_citation_filtering.md)
- [multidisciplinary field-mix caveat](../validations/multidisciplinary_field_mix_caveat.md)
- [relative citation ratio](../measures/relative_citation_ratio.md)
- [co-citation network field definition](../representations/co_citation_network_field_definition.md)
- [RCR benchmark calibration](rcr_benchmark_calibration.md)
- [NIH R01 benchmark corpus](../datasets/nih_r01_benchmark_corpus.md)
- [field classifications](../measures/field_classifications.md)
- [publication-level field classification](publication_level_field_classification.md)
- [normalized publication relatedness](../measures/normalized_publication_relatedness.md)
- [bibliographic coupling](../representations/bibliographic_coupling.md)
- [co citation](../representations/co_citation.md)
- [science maps](../representations/science_maps.md)
- [WoS subject category fractionalization](../validations/wos_subject_category_fractionalization.md)
- [citation data census dates](citation_data_census_dates.md)
- [WoS Core Collection source layers](../datasets/wos_core_collection_source_layers.md)
- [field-specific indicator suites](field_specific_indicator_suites.md)

## References

- Waltman, L. (2016). A review of the literature on citation impact indicators. *Journal of Informetrics*, 10(2), 365-391. https://doi.org/10.1016/j.joi.2016.02.007 [OpenAlex: W767067438; Dimensions: pub.1051718960; WoS: unknown]
- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; WoS: unknown]
- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]
- Birkle, C., Pendlebury, D. A., Schnell, J., & Adams, J. (2020). Web of Science as a data source for research on scientific and scholarly activity. *Quantitative Science Studies*, 1(1), 363-376. https://doi.org/10.1162/qss_a_00018 [OpenAlex: W3000895385; Dimensions: pub.1124230134; WoS: unknown]
- Waltman, L., & van Eck, N. J. (2012). A new methodology for constructing a publication-level classification system of science. *Journal of the American Society for Information Science and Technology*, 63(12), 2378-2392. https://doi.org/10.1002/asi.22748 [OpenAlex: W2126566678; Dimensions: pub.1036746088; WoS: unknown; SciSciNet: W2126566678]

## Metadata

- Concept ID: `reference_set_construction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Waltman (2016) (2016)
- Latest seen paper: Birkle et al. (2020) (2020)
- Primary reference DOI: `10.1016/j.joi.2016.02.007`
- OpenAlex ID: `W767067438`
- Aliases: reference set; comparison set; expected citation baseline; citation normalization baseline
