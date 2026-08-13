# Cross-office patent-data harmonization

## Summary

Cross-office patent-data harmonization is the workflow of standardizing patent records from many national or regional patent authorities so they can be analyzed as a single science-to-technology corpus.

## Canonical Form

- Unit of analysis: patent record, patent application, patent family, patent authority, language-normalized document, or standardized bibliographic field.
- Typical representation: multi-office patent table with normalized titles, abstracts, assignees, inventors, citations, family identifiers, and authority metadata.
- Mechanism or measurement target: whether patent retrieval, grouping, and citation analysis remain comparable across heterogeneous patent offices.
- Empirical signature: cross-office patent data are translated, standardized, deduplicated, and linked before any country, organization, or technology comparison.

## Uses in Science of Science

- Makes the [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md) usable as a cross-national evidence base.
- Provides the data-cleaning layer needed before [science-based patent grouping](science_based_patent_grouping.md), [patent family expansion deduplication](patent_family_expansion_deduplication.md), and patent citation parsing.
- Supports comparisons involving [scientific knowledge application index](../measures/scientific_knowledge_application_index.md), inventor-country assignment, organization type, and IPC class.
- Connects proprietary patent corpora to broader open or semi-open infrastructures such as [PatentsView utility patent sample](../datasets/patentsview_utility_patent_sample.md) and [patent citation to science link table](../datasets/patent_citation_to_science_link_table.md).

## Operationalization

- Start from a patent database that aggregates records from many offices and exposes standardized fields.
- Translate or normalize multilingual title and abstract text before keyword retrieval.
- Preserve patent-office provenance so country and coverage comparisons can separate substantive effects from source availability.
- Harmonize assignee, inventor, family, citation, and classification fields before deriving science-to-technology indicators.
- Audit the corpus for family expansion, deduplication, and missing offices before using country-level results.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) uses Derwent Innovation and DWPI, which they describe as indexing patents from more than 50 patent authorities and standardizing records in English after translation from 30 languages.
- The harmonized source layer precedes their nano medical device keyword search, patent-family expansion, deduplication, assignee classification, inventor-country extraction, and citation analysis.
- Treating cross-office harmonization as a separate motif clarifies that later national differences in science linkage are conditional on the availability and standardization of patent records.

## Caveats

- Proprietary harmonization is difficult to reproduce exactly without the same vendor snapshot and field definitions.
- Translation and normalization can change keyword retrieval and citation parsing.
- Patent-office coverage is not equivalent to invention coverage, especially for countries or sectors with different filing strategies.
- Harmonized records can hide source-specific missingness unless office provenance is retained.

## Links

- [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md)
- [science-based patent grouping](science_based_patent_grouping.md)
- [patent family expansion deduplication](patent_family_expansion_deduplication.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [patent citation to science link table](../datasets/patent_citation_to_science_link_table.md)
- [PatentsView utility patent sample](../datasets/patentsview_utility_patent_sample.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology: The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `cross_office_patent_data_harmonization`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: cross-authority patent harmonization; Derwent patent normalization; multilingual patent standardization; patent-office data harmonization
