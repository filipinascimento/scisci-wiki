# Major U.S. university WoS panel

## Summary

Major U.S. university WoS panel is a paper-level dataset design that restricts Web of Science records to a defined sample of major U.S. universities in order to study long-run collaboration, geography, and institutional stratification.

## Canonical Form

- Unit of analysis: paper, author affiliation, university, field, year, and institution pair.
- Typical representation: longitudinal paper-affiliation panel with field labels, address-derived universities, citation outcomes, and collaboration categories.
- Dataset target: a stable university sample that can separate within-school and between-school scientific teamwork over time.
- Empirical signature: millions of papers linked to hundreds of universities across several decades, with enough field coverage to compare science and engineering, social sciences, and arts and humanities.

## Uses in Science of Science

- Supplies the evidence substrate for [between-school collaboration share](../measures/between_school_collaboration_share.md), [authorship structure taxonomy](../measures/authorship_structure_taxonomy.md), and [multi-university collaboration stratification](../mechanisms/multi_university_collaboration.md).
- Links [Web of Science](web_of_science.md) address data to institution-level collaboration, geography, and citation-impact analyses.
- Provides a controlled domestic panel for separating collaboration frequency from [geographic reach-frequency decoupling](../mechanisms/geographic_reach_frequency_decoupling.md).
- Supports tier-based representations such as [university tier mixing matrices](../representations/university_tier_mixing_matrix.md) when institutions can be ranked from within-school outputs.

## Operationalization

- Define a sample frame of major universities, then retain WoS papers with address strings that can be mapped into those universities.
- Link papers to publication year, field or subfield, author affiliations, institutional pairs, and citation outcomes.
- Classify each paper into solo, within-school collaboration, or between-school collaboration.
- Preserve the dataset construction choices: university inclusion criteria, nonuniversity exclusions, field coverage, address parsing rules, citation census, and disambiguation decisions.

## Evidence and Validations

- Verified full-text evidence from Jones et al. (2008) uses a panel of 662 major U.S. universities and 4.2 million Web of Science papers from 1975 to 2005.
- The paper reports coverage across 172 science and engineering fields, 54 social-science fields, and 27 arts and humanities fields.
- This panel underwrites the paper's estimates of cross-university collaboration growth, citation advantages, collaboration distance, and rank-tier mixing.
- The same source shows why dataset scope matters: the claims are about U.S. universities and should not be read as a full census of all global science.

## Caveats

- The panel depends on address coverage, university-name normalization, and decisions about multi-campus systems and affiliated hospitals.
- Restricting to major U.S. universities improves internal consistency but limits generalization to non-U.S., nonuniversity, industry, government, and smaller-institution science.
- Field coverage differs across WoS indexes and may produce domain-specific coverage bias.
- Citation outcomes can be affected by field mix, time window, and the same university-ranking choices used later in analysis.

## Links

- [Web of Science](web_of_science.md)
- [between-school collaboration share](../measures/between_school_collaboration_share.md)
- [authorship structure taxonomy](../measures/authorship_structure_taxonomy.md)
- [multi-university collaboration stratification](../mechanisms/multi_university_collaboration.md)
- [geographic reach-frequency decoupling](../mechanisms/geographic_reach_frequency_decoupling.md)
- [university tier mixing matrix](../representations/university_tier_mixing_matrix.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [WoS Core Collection source layers](wos_core_collection_source_layers.md)

## References

- Jones, B. F., Wuchty, S., & Uzzi, B. (2008). Multi-university research teams: Shifting impact, geography, and stratification in science. *Science*, 322(5905), 1259-1262. https://doi.org/10.1126/science.1158357 [OpenAlex: W2096523843; Dimensions: pub.1062457759; WoS: unknown]

## Metadata

- Concept ID: `major_us_university_wos_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Jones et al. (2008) (2008)
- Latest seen paper: Jones et al. (2008) (2008)
- Primary reference DOI: `10.1126/science.1158357`
- OpenAlex ID: `W2096523843`
- Dimensions ID: `pub.1062457759`
- SciSciNet ID: `W2096523843`
- Aliases: major US university panel; 662-university WoS panel; multi-university collaboration corpus; 1975-2005 university paper panel
