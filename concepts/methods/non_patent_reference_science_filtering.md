# Non-patent-reference science filtering

## Summary

Non-patent-reference science filtering separates scientific publications from the many other non-patent materials cited on patent front pages or in patent text.

## Canonical Form

- Unit of analysis: non-patent reference string, patent reference category, scientific article candidate, exclusion term, or patent-paper edge.
- Typical representation: binary scientific-reference label, exclusion vocabulary, manual validation sample, or filter stage before bibliographic matching.
- Method target: prevent counts of all non-patent references from being misread as counts of scientific literature use.
- Empirical signature: sampled non-patent references include scientific articles alongside manuals, product brochures, patent applications, office actions, web pages, testimony, and other non-scientific documents.

## Uses in Science of Science

- Provides a preprocessing stage for [scientific non-patent references](../datasets/scientific_non_patent_references.md) and [patent-paper links](../datasets/patent_paper_links.md).
- Prevents overcounting science reliance when computing [patent scientific reliance count](../measures/patent_scientific_reliance_count.md) or science-based patent shares.
- Supports [unstructured patent-reference matching](unstructured_patent_reference_matching.md) by removing clearly non-scientific strings before expensive candidate generation.
- Gives a validation target for datasets that use non-patent-reference counts as a proxy for scientific heritage.

## Operationalization

- Sample non-patent reference strings and classify them into scientific articles, books, manuals, product materials, patent applications, office actions, web pages, legal documents, and other categories.
- Build exclusion rules for clearly non-scientific materials before attempting paper matching.
- Preserve ambiguous cases for manual review or lower-confidence matching.
- Report how many non-patent references are excluded before matching and how many remain as candidate scientific references.

## Evidence and Validations

- Verified full-text evidence from Wang and Li (2018) separates patent citations from non-patent citations and notes that non-patent citations include scientific articles, withdrawn patents, manuals, databases, web information, news, and other materials.
- Wang and Li use automatic identification combined with manual recognition to retain scientific articles as science-based citations for nano medical device patents.
- Verified full-text evidence from Marx and Fuegi (2020) says that using the count of non-patent references as an indicator of scientific article citations is misleading.
- Their random examples include scientific articles but also product information, user manuals, patent applications, and patent-office actions.
- Marx and Fuegi begin from 36,020,060 USPTO non-patent references and reduce the matching set to 26,028,093 after excluding references clearly not to scientific articles.
- The paper's known-good recall procedure first categorizes 1,000 sampled non-patent references and retains 546 as scientific references.

## Caveats

- Science filtering can create false negatives when scientific references look like books, reports, standards, or technical manuals.
- Exclusion vocabularies can be language-, jurisdiction-, and time-specific.
- Filtering should be documented separately from later entity-resolution errors.

## Links

- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)
- [unstructured patent-reference matching](unstructured_patent_reference_matching.md)
- [patent scientific reliance count](../measures/patent_scientific_reliance_count.md)
- [science-based patent grouping](science_based_patent_grouping.md)
- [patent-science precision-recall calibration](../validations/patent_science_precision_recall_calibration.md)
- [front-page patent-reference scope](../validations/front_page_patent_reference_scope.md)
- [Derwent nano medical device patent panel](../datasets/derwent_nano_medical_device_patent_panel.md)

## References

- Wang, L., & Li, Z. (2018). Knowledge transfer from science to technology—The case of nano medical device technologies. *Frontiers in Research Metrics and Analytics*, 3, 11. https://doi.org/10.3389/frma.2018.00011 [OpenAlex: W2792521913; Dimensions: pub.1101486828; WoS: unknown]
- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `non_patent_reference_science_filtering`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wang and Li (2018) (2018)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.3389/frma.2018.00011`
- OpenAlex ID: `W2792521913`
- Dimensions ID: `pub.1101486828`
- SciSciNet ID: `W2792521913`
- Aliases: NPL science filtering; non-patent literature type filtering; scientific-reference filtering; patent NPL classification
