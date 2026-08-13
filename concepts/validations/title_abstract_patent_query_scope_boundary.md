# Title-abstract patent-query scope boundary

## Summary

The title-abstract patent-query scope boundary is the validity limit created when a patent corpus is defined only by keyword matches in titles and abstracts.

## Canonical Form

- Unit of analysis: patent retrieval query, matched patent record, excluded patent record, false positive, false negative, or topic corpus.
- Typical representation: search string plus searchable fields, date range, source database, and downstream inclusion rules.
- Validation target: whether the textual retrieval frame captures the intended technology domain without overexpanding to unrelated patents.
- Empirical signature: domain conclusions are explicitly conditional on a title-abstract search boundary rather than a complete technology census.

## Uses in Science of Science

- Bounds interpretation of the [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md), which begins from a title-abstract query.
- Separates patent retrieval uncertainty from later steps such as [science-based patent grouping](../methods/science_based_patent_grouping.md), [scientific knowledge application index](../measures/scientific_knowledge_application_index.md), and forward-citation analysis.
- Helps compare keyword-defined technology corpora with classification-defined, citation-defined, or expert-curated patent samples.

## Operationalization

- Record the exact query string, searchable fields, source database, date range, and run date.
- Treat retrieved records as the analytic frame rather than as the full domain.
- Inspect matched and unmatched examples when possible to estimate topical precision and recall.
- Test sensitivity to alternative keywords, classifications, family expansion, and exclusion rules.
- Carry the query boundary into caveats for country, organization, and technology-class comparisons.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) defines the initial nano medical device patent pool with `SSTO = (nano* and "medical device*")` in Derwent Innovation over title and abstract fields.
- The query produces 37,904 initial patent records before family expansion and deduplication.
- Their later measures of science-based patenting and science application value are therefore conditional on this title-abstract retrieval frame.

## Caveats

- Title and abstract language can lag behind or differ from technical classifications.
- Broad wildcard terms can admit false positives, while narrow phrases can miss relevant variants.
- Vendor translation and title-abstract standardization affect the effective query scope.
- Query-defined corpora should not be interpreted as complete technology domains without external validation.

## Links

- [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md)
- [science-based patent grouping](../methods/science_based_patent_grouping.md)
- [scientific knowledge application index](../measures/scientific_knowledge_application_index.md)
- [patent family expansion deduplication](../methods/patent_family_expansion_deduplication.md)
- [scientific non-patent references](../datasets/scientific_non_patent_references.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology: The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]

## Metadata

- Concept ID: `title_abstract_patent_query_scope_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Wang and Li (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: patent keyword scope boundary; title abstract patent retrieval; patent query recall limit; technology corpus keyword boundary
