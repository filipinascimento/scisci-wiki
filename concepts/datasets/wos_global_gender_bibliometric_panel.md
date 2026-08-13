# WoS global gender bibliometric panel

## Summary

The WoS global gender bibliometric panel is a Web of Science article-and-review corpus from 2008-2012 with author-position, country, discipline, collaboration, citation, and inferred-gender layers.

## Canonical Form

- Unit of analysis: paper, authorship, country, discipline, author position, collaboration type, and citation outcome.
- Typical representation: publication panel with fractional gendered authorships, address countries, UCSD map-of-science categories, and field-normalized citations.
- Mechanism or measurement target: global gender disparities in output, collaboration, and citation impact.
- Empirical signature: gendered authorship and impact estimates are computed from a full-database WoS extract rather than from a single field or local institution.

## Uses in Science of Science

- Provides a large empirical substrate for [gender and race stratification](../mechanisms/gender_race_stratification.md) in science.
- Connects [Web of Science](web_of_science.md) address and citation records to [given-name gender assignment](../methods/given_name_gender_assignment.md).
- Supports [gendered fractional authorship ratio](../measures/gendered_fractional_authorship_ratio.md), [gendered collaboration rate](../measures/gendered_collaboration_rate.md), and [lead-author gender citation gap](../mechanisms/lead_author_gender_citation_gap.md).
- Supports split-out position, geography, and validation motifs including [gendered author-position gap](../measures/gendered_author_position_gap.md), [gender parity pocket maps](../representations/gender_parity_pocket_maps.md), [gendered seniority-pipeline confound](../validations/gendered_seniority_pipeline_confound.md), and [authorship-output indicator boundary](../validations/authorship_output_indicator_boundary.md).
- Makes data-source coverage and document-type filtering explicit for [responsible metrics](../measures/responsible_metrics.md).
- Separates demographic-inference data quality into [full first-name metadata window](../validations/full_first_name_metadata_window.md), [initials demographic missingness](../validations/initials_demographic_missingness.md), [authorship mention-unit boundary](../validations/authorship_mention_unit_boundary.md), and [country-specific name-gender rules](../methods/country_specific_name_gender_rules.md).

## Operationalization

- Draw articles and review articles from Web of Science's Science Citation Index Expanded, Social Sciences Citation Index, and Arts and Humanities Citation Index.
- Restrict the frame to 2008-2012, when WoS includes full first names more often than earlier records.
- Use author address records to assign publications to countries and exclude very small country samples where needed.
- Match author given names to gender-name lists and rules, then aggregate author-paper records into fractional gendered authorships.
- Normalize citations by specialty and publication year before comparing author-position categories.

## Evidence and Validations

- Verified full-text evidence from Lariviere et al. (2013) uses 5,483,841 research papers and review articles and 27,329,915 authorships indexed in Web of Science from 2008 to 2012.
- The supplement states that the raw WoS data were transformed into a relational SQL database at Observatoire des sciences et des technologies at the University of Quebec at Montreal.
- The panel covers SCI-Expanded, SSCI, and A&HCI records; it excludes editorials, letters, and book reviews because they are not treated as original scholarly contributions.
- Lariviere et al. use WoS full first-name fields for gender assignment and institutional address fields for geographical assignment by gender.
- Citation measures count citations from publication year through the end of 2012 and divide each article's citations by the average for articles in the same discipline and year.
- The analysis originally extracts 206 countries or territories, excludes countries with fewer than 20 publications for productivity, collaboration, and impact analyses, and also analyzes US states and Canadian provinces.
- Disciplines are represented through 554 UCSD Map of Science subject categories, enabling field-level gendered output maps.

## Caveats

- The corpus is restricted to WoS-indexed articles and reviews, so books, conference proceedings, code, data, and non-English or non-indexed outputs are undercovered.
- This undercoverage is treated explicitly in [authorship-output indicator boundary](../validations/authorship_output_indicator_boundary.md).
- Inferred binary gender is an aggregate proxy and does not measure self-identified gender or non-binary identities.
- Authorship records are not author-disambiguated individuals in this study, so the panel measures gendered authorships rather than gendered researcher careers.
- Citation observations are truncated at the end of 2012, making the citation window shorter for recent papers in the panel.

## Links

- [Web of Science](web_of_science.md)
- [WoS Core Collection source layers](wos_core_collection_source_layers.md)
- [given-name gender assignment](../methods/given_name_gender_assignment.md)
- [name-based demographic inference](../methods/name_based_demographic_inference.md)
- [gender-name assignment validation](../validations/gender_name_assignment_validation.md)
- [gendered fractional authorship ratio](../measures/gendered_fractional_authorship_ratio.md)
- [gendered author-position gap](../measures/gendered_author_position_gap.md)
- [gendered collaboration rate](../measures/gendered_collaboration_rate.md)
- [lead-author gender citation gap](../mechanisms/lead_author_gender_citation_gap.md)
- [gender parity pocket maps](../representations/gender_parity_pocket_maps.md)
- [gendered seniority-pipeline confound](../validations/gendered_seniority_pipeline_confound.md)
- [authorship-output indicator boundary](../validations/authorship_output_indicator_boundary.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [gender and race stratification](../mechanisms/gender_race_stratification.md)
- [full first-name metadata window](../validations/full_first_name_metadata_window.md)
- [initials demographic missingness](../validations/initials_demographic_missingness.md)
- [authorship mention-unit boundary](../validations/authorship_mention_unit_boundary.md)
- [country-specific name-gender rules](../methods/country_specific_name_gender_rules.md)

## References

- Lariviere, V., Ni, C., Gingras, Y., Cronin, B., & Sugimoto, C. R. (2013). Bibliometrics: Global gender disparities in science. *Nature*, 504, 211-213. https://doi.org/10.1038/504211a [OpenAlex: W2050990045; Dimensions: pub.1050929337; WoS: unknown]

## Metadata

- Concept ID: `wos_global_gender_bibliometric_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Lariviere et al. (2013) (2013)
- Latest seen paper: Lariviere et al. (2013) (2013)
- Primary reference DOI: `10.1038/504211a`
- OpenAlex ID: `W2050990045`
- Dimensions ID: `pub.1050929337`
- SciSciNet ID: `W2050990045`
- Aliases: global gender bibliometrics; WoS gender panel; gendered authorship corpus; 2008-2012 WoS gender panel
